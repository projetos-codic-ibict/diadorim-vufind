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

use VuFind\View\Helper\Root\RecordDataFormatter;
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
        $spec = new RecordDataFormatter\SpecBuilder();
        $spec->setLine("Title", "getTitle");
        $spec->setLine("Situation", "getSituation");
        $spec->setLine("Publisher", "getPublisher");
        $spec->setLine("Subordinate", "getSubordinate");
        $spec->setLine("Legal Nature", "getLegalNature");
        $spec->setLine("Editor", "getEditor");
        $spec->setLine("Phone", "getPhone");
        $spec->setLine("Email", "getEmail");
        $spec->setLine("URL", "getUrl");
        $spec->setTemplateLine('URL', true, 'url.phtml');
        $spec->setLine("URL OAI", "getOai");
        $spec->setLine("ISSN", "getIssn");
        $spec->setLine("ISSN-L", "getIssnl");
        $spec->setLine("Cnpq", "getCnpq");
        $spec->setLine("Pre Print Submission", "getPrePrintSubmission");
        $spec->setLine("Pre Print", "getPrePrint");
        $spec->setLine("Url Author Post Print", "getAuthorPostPrint");
        $spec->setLine("Journal Post Print", "getJournalPostPrint");
        $spec->setLine("Seal Color", "getSealColor");
        $spec->setLine("Time", "getTime");
        $spec->setLine("Access", "getAccess");
        $spec->setLine("Creative Commons", "getCreativeCommons");
        $spec->setLine("Handle", "getHandle");
        //$spec->setLine("Last modified", "getLastModified");
        $spec->setTemplateLine('Last modified', true, 'date.phtml');
        return $spec->getArray();
    }
}
