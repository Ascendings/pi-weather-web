<?php

namespace App\Controllers;

use SLim\Views\Twig as View;

// Home page controller
class HomeController extends Controller {

  // index function
  public function index($req, $res) {
    return $this->view->render($res, 'home/index.twig');
  }

}
