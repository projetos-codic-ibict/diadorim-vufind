<?php

namespace Diadorim\Controller;

class CriteriosController extends \VuFind\Controller\AbstractBase
{
    public function homeAction()
    {
        return $this->createViewModel();
    }
}

