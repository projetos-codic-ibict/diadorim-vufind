<?php

/**
 * This is custom module for Diadorim.
 * PHP version 7
 *
 * @category Diadorim
 * @package  Diadorim
 * @author   Jesiel Viana <jesielviana@pm.me>
 * @license  http://opensource.org/licenses/gpl-2.0.php GNU General Public License
 * @link     https://vufind.org/wiki/development:plugins:record_drivers Wiki
 */

namespace Diadorim\View\Helper\Root;

use VuFind\View\Helper\Root\RecordDataFormatter\SpecBuilder;

/**
 * This is custom class for Diadorim.
 * It provides a number of useful methods for accessing Solr data.
 *
 * @category Diadorim
 * @package  Diadorim
 * @author   Jesiel Viana <jesielviana@pm.me>
 * @license  http://opensource.org/licenses/gpl-2.0.php GNU General Public License
 * @link     https://vufind.org/wiki/development:plugins:record_drivers Wiki
 */

class RecordDataFormatterFactory extends \VuFind\View\Helper\Root\RecordDataFormatterFactory
{
    /**
     * Get Publisher for displaying data in collection-info metadata.
     *
     * @return array
     */
    public function getDefaultCoreSpecs()
    {
        $spec = new SpecBuilder(parent::getDefaultCoreSpecs());
        $spec->setLine("Publisher", "getPublisher");
        return $spec->getArray();
    }
}
