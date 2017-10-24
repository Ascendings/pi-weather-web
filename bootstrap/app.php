<?php

// start PHP session
session_start();

// autload dependencies
require __DIR__ . '/../vendor/autoload.php';

// create new app instance
$app = new \Slim\App([
  'settings' => [
    'displayErrorDetails' => true,
  ]
]);

// grab container
$c = $app->getContainer();

// load our configuration
$c['config'] = function($container) {
  return new \Noodlehaus\Config(__DIR__ . '/../config/app.json');
};

// database configuration
require __DIR__ . '/../bootstrap/database.php';
// setup db
$c['db'] = function($container) use ($capsule) {
  return $capsule;

};

// setup our views
$c['view'] = function($container) {
  $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
    'cache' => false,
  ]);
  $view->addExtension(new \Slim\Views\TwigExtension(
    $container->router,
    $container->request->getUri()
  ));

  return $view;
};

// add bindings for controllers
$c['HomeController'] = function($container) {
  return new \App\Controllers\HomeController($container);
};

// require in our routes
require __DIR__ . '/../bootstrap/routes.php';
