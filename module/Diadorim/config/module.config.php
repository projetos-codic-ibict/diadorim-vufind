<?php

return [
    "vufind" => [
        "plugin_managers" => [
            "recorddriver" => [
                "factories" => [
                    "Diadorim\\RecordDriver\\SolrDefault" => "VuFind\\RecordDriver\\SolrDefaultFactory",
                ],
                "aliases" => [
                    "VuFind\\RecordDriver\\SolrDefault" => "Diadorim\\RecordDriver\\SolrDefault",
                ],
            ],
        ],
    ],
];
