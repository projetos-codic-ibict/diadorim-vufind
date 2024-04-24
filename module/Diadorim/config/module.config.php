<?php

return array (
  'vufind' => 
  array (
    'plugin_managers' => 
    array (
      'recorddriver' => 
      array (
        'factories' => 
        array (
          'Diadorim\\RecordDriver\\SolrDefault' => 'VuFind\\RecordDriver\\SolrDefaultFactory',
        ),
        'aliases' => 
        array (
          'VuFind\\RecordDriver\\SolrDefault' => 'Diadorim\\RecordDriver\\SolrDefault',
        ),
      ),
    ),
  ),
  'controllers' => 
  array (
    'factories' => 
    array (
      'Diadorim\\Controller\\SobreController' => 'VuFind\\Controller\\AbstractBaseFactory',
    ),
    'aliases' => 
    array (
      'Sobre' => 'Diadorim\\Controller\\SobreController',
      'sobre' => 'Diadorim\\Controller\\SobreController',
    ),
  ),
  'router' => 
  array (
    'routes' => 
    array (
      'sobre-home' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/Sobre/Home',
          'defaults' => 
          array (
            'controller' => 'Sobre',
            'action' => 'Home',
          ),
        ),
      ),
    ),
  ),
);