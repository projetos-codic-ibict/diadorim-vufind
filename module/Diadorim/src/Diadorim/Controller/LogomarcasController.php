<?php

namespace Diadorim\Controller;

class LogomarcasController extends \VuFind\Controller\AbstractBase
{
    public function homeAction()
    {
        return $this->createViewModel();
    }
}

