<?php

namespace Diadorim\View\Helper\Root;

use VuFind\View\Helper\Root\RecordDataFormatter\SpecBuilder;

class RecordDataFormatterFactory extends \VuFind\View\Helper\Root\RecordDataFormatterFactory
{
  public function getDefaultCoreSpecs()
  {
    $spec = new SpecBuilder(parent::getDefaultCoreSpecs());
    $spec->setLine('Publisher', 'getPublisher');
    return $spec->getArray();
  }
}
