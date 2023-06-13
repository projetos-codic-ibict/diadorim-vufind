<?php

namespace Diadorim\RecordDriver;

class SolrDefault extends \VuFind\RecordDriver\SolrDefault
{

  const NA_MESSAGE = "Não Informado pela instituição";

  public function getFieldsValuesDefault($fields)
  {
    $values = [];

    foreach ($fields as $field) {
      if (isset($this->fields[$field])) {
        $field_value = $this->fields[$field];
        if (!is_array($field_value))
          $field_value = array($field_value);

        $values = array_merge($values, $field_value);
      }
    }

    return array_unique($values);
  }


  public function getFieldValue($field)
  {
    $value = null;
    $onlyField = array($field);

    $value = $this->getFieldsValues($onlyField);

    if (is_array($value)) {
      $value = $value[0];
    }

    return $value;
  }

  /**
   * Get all field occurrences
   *
   * @param array $fields to compile and return
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

  public function getPublisher()
  {
    return $this->getFieldValue('dc.publisher.name');
  }
}
