<?php

namespace App\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('AppDemoBundle:Default:index.html.twig', array('name' => $name));
    }

    public function howItWorksAction()
    {
        list($host, $port) = explode(':', $_SERVER['HTTP_HOST']);
        return $this->render('AppDemoBundle:Default:how_it_works.html.twig', array(
            'host' => $host,
        ));
    }

    public function nothingAction() {
        exit;
    }
}
