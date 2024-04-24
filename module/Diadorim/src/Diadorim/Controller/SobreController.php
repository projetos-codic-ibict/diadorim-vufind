<?php

namespace Diadorim\Controller;

class SobreController extends \VuFind\Controller\AbstractBase
{
    public function homeAction()
    {
        return $this->createViewModel();
    }
}

