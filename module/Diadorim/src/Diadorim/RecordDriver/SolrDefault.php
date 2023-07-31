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
    public function getPublisher()
    {
        return $this->getFieldValue("dc.publisher.name");
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
}
