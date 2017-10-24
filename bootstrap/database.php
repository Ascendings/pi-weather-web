<?php

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($c['config']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();
