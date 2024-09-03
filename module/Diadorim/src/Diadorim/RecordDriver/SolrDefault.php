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

namespace Diadorim\RecordDriver;

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

class SolrDefault extends \VuFind\RecordDriver\SolrDefault
{
    /**
     * NA_MESSAGE for fields not found
     */
    private const NA_MESSAGE = "Não Informado pela instituição";

    /**
     * Get all field occurrences
     *
     * @param array $fields to compile and return
     *
     * @return array
     */
    public function getFieldsValuesDefault($fields)
    {
        $values = [];

        foreach ($fields as $field) {
            if (isset($this->fields[$field])) {
                $field_value = $this->fields[$field];
                if (!is_array($field_value)) {
                    $field_value = [$field_value];
                }

                $values = array_merge($values, $field_value);
            }
        }

        return array_unique($values);
    }

    /**
     * Get first field occurrence
     *
     * @param string $field to compile and return
     *
     * @return string
     */
    public function getFieldValue($field)
    {
        $value = null;
        $onlyField = [$field];

        $value = $this->getFieldsValues($onlyField);

        if (is_array($value)) {
            $value = $value[0];
        }

        return $value;
    }

    /**
     * Get all field occurrences
     *
     * @param array $fields     to compile and return
     * @param bool  $na_message to show NA_MESSAGE when no field is found
     *
     * @return array
     */
    public function getFieldsValues($fields, $na_message = true)
    {
        $values = $this->getFieldsValuesDefault($fields);

        if (sizeof($values) == 0 && $na_message) {
            array_push($values, self::NA_MESSAGE);
        }

        return $values;
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->getFieldValue("dc.title");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getSituation()
    {
        return $this->getFieldValue("dc.description.situation");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getPublisher()
    {
        return $this->getFieldValue("dc.publisher.name");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getSubordinate()
    {
        return $this->getFieldValue("dc.publisher.subordinate");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getLegalNature()
    {
        return $this->getFieldValue("dc.publisher.legalnature");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getEditor()
    {
        return $this->getFieldValue("dc.contributor.editor");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->getFieldValue("dc.description.phone");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->getFieldValue("dc.identifier.email");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->getFieldValue("dc.identifier.url");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getOai()
    {
        return $this->getFieldValue("dc.identifier.oai");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getIssn()
    {
        return $this->getFieldValue("dc.identifier.issn");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getIssnl()
    {
        return $this->getFieldValue("dc.identifier.issnl");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getCnpq()
    {
        return $this->getFieldValue("dc.subject.cnpq");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getPrePrintSubmission()
    {
        return $this->getFieldValue("dc.rights.preprintsubmission");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getPrePrint()
    {
        return $this->getFieldValue("dc.rights.preprint");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getAuthorPostPrint()
    {
        return $this->getFieldValue("dc.rights.authorpostprint");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getJournalPostPrint()
    {
        return $this->getFieldValue("dc.rights.journalpostprint");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getSealColor()
    {
        return $this->getFieldValue("dc.rights.sealcolor");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getLastModified()
    {
        return $this->getFieldValue("lastModified");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getTime()
    {
        return $this->getFieldValue("dc.rights.time");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getAccess()
    {
        return $this->getFieldValue("dc.rights.access");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getCreativeCommons()
    {
        return $this->getFieldValue("dc.rights.creativecommons");
    }

    /**
     * Get first field occurrence
     *
     * @return string
     */
    public function getHandle()
    {
        return $this->getFieldValue("handle");
    }

     /**
     * Get first field occurrence
     *
     * @return string
     */

     public function getReference()
     {
        return $this-> getFieldValue("dc.description.bibliographicreference");
     }

    
}
