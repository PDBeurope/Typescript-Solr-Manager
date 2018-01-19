var PDBe;
(function (PDBe) {
    var SolrApp;
    (function (SolrApp) {
        SolrApp.managerConfig = [
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'expMethodFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'experimental_method'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'entryAuthorFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'entry_authors'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'pfamFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'pfam_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'superkingdomFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'superkingdom'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'genusFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'genus'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'orgSciNameFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'organism_scientific_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'citationYearFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'citation_year'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'spacegroupFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'spacegroup'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'biologicalProcessFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'biological_process'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'biologicalFunctionFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'biological_function'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'bioCellComponentFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'biological_cell_component'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'bioCellComponentFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'biological_cell_component'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'journalFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'journal'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'assemblyCompositionFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'assembly_composition'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'assemblyFormFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'assembly_form'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'assemblyTypeFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'assembly_type'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'refSoftFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'refinement_software'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'beamSrcTypeFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'beam_source_type'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'detectorFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'detector'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'detectorTypeFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'detector_type'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'diffProtocolFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'diffraction_protocol'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'moleNameFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'molecule_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'statusFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'status'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'ecNumberFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'ec_number'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'cathClassFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'cath_class'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'cathTopologyFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'cath_topology'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'geneNameFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'gene_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'interproNameFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'interpro_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'scopClassFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'scop_class'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'scopFamilyFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'scop_family'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'scopFoldFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'scop_fold'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'citAuthorsFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'citation_authors'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'interactingMolFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'interacting_molecules'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'interactingLigandsFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'interacting_ligands'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'molTypeFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'molecule_type'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'beamSrcNameFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'beam_source_name'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'synchrotronSiteFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.field': [
                        'synchrotron_site'
                    ],
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'depYearFacetManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.range': ['deposition_year'],
                    'f.deposition_year.facet.range.start': '1970',
                    'f.deposition_year.facet.range.end': '2050',
                    'f.deposition_year.facet.range.gap': '5',
                    'f.deposition_year.facet.range.other': 'between',
                    'f.deposition_year.facet.range.include': 'upper',
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'relYearFacetsManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.range': ['release_year'],
                    'f.release_year.facet.range.start': '1970',
                    'f.release_year.facet.range.end': '2050',
                    'f.release_year.facet.range.gap': '5',
                    'f.release_year.facet.range.other': 'between',
                    'f.release_year.facet.range.include': 'upper',
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'resolutionFacetsManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'group.facet': true,
                    'facet': true,
                    'rows': '0',
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'facet.sort': 'count',
                    'json.nl': 'map',
                    'facet.range': ['resolution'],
                    'f.resolution.facet.range.start': '0.0',
                    'f.resolution.facet.range.end': '100',
                    'f.resolution.facet.range.gap': '0.5',
                    'f.resolution.facet.range.other': 'between',
                    'f.resolution.facet.range.include': 'upper',
                    'facet.threads': -1
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'entriesManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'rows': 100,
                    'json.nl': 'map',
                    'fl': [
                        'pdb_id', 'citation_title', 'citation_authors', 'title', 'experimental_method', 'entry_authors', 'pubmed_id', 'citation_year', 'journal', 'organism_scientific_name', 'assembly_composition', 'interacting_ligands', 'tax_id', 'resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name', 'data_quality', 'model_quality', 'experiment_data_available', 'deposition_date', 'release_year'
                    ]
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'macroMoleculesManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'molecule_name',
                    'facet': true,
                    'f.molecule_name.facet.limit': 100,
                    'f.molecule_name.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': 20000,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'macroMoleculesTotalManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'molecule_name',
                    'facet': true,
                    'f.molecule_name.facet.limit': 100000,
                    'f.molecule_name.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': 20000,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    },
                    name: 'pivotEntriesManager',
                },
                managerParams: {
                    'group': true,
                    'group.facet': true,
                    'group.ngroups': true,
                    'group.field': ['entry_entity'],
                    'fl': [
                        'pdb_id', 'citation_title', 'citation_authors', 'title', 'experimental_method', 'entry_authors', 'pubmed_id', 'citation_year', 'journal', 'organism_scientific_name', 'assembly_composition', 'interacting_ligands', 'tax_id', 'resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name', 'pfam_accession', 'data_quality', 'model_quality', 'experiment_data_available', 'deposition_date', 'release_year'
                    ]
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'compoundsManager'
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'interacting_ligands,molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'interacting_ligands',
                    'facet': true,
                    'f.interacting_ligands.facet.limit': 100,
                    'f.interacting_ligands.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': 20000,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'compoundsTotalManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'interacting_ligands,molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'interacting_ligands',
                    'facet': true,
                    'f.interacting_ligands.facet.limit': 100000,
                    'f.interacting_ligands.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': 20000,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'proteinFamiliesManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'pfam_name,molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'pfam_name',
                    'facet': true,
                    'f.pfam_name.facet.limit': 100,
                    'f.pfam_name.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': -1,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                    },
                    name: 'proteinFamiliesTotalManager',
                },
                managerParams: {
                    'q': '*:*',
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'facet.pivot': 'pfam_name,molecule_name,inv_overall_quality,entry_entity',
                    'facet.pivot.mincount': 1,
                    'facet.sort': 'overall_quality+asc',
                    'facet.field': 'pfam_name',
                    'facet': true,
                    'f.pfam_name.facet.limit': 100000,
                    'f.pfam_name.facet.offset': 0,
                    'rows': 0,
                    'facet.limit': 20000,
                    'facet.mincount': 1,
                    'json.nl': 'map',
                    'fq': 'status:REL'
                }
            },
            {
                managerDetails: {
                    solrUrl: {
                        normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                        latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/'
                    },
                    name: 'validationAndPrintsManager',
                },
                managerParams: {
                    'group': true,
                    'group.field': ['pdb_id'],
                    'group.ngroups': true,
                    'fl': [
                        'pdb_id', 'data_quality', 'model_quality', 'experiment_data_available'
                    ]
                }
            }
        ];
    })(SolrApp = PDBe.SolrApp || (PDBe.SolrApp = {}));
})(PDBe || (PDBe = {}));
;
/*
{
            managerDetails: {
                solrUrl: {
                    normal: 'https://wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: 'https://wwwdev.ebi.ac.uk/pdbe/search/latest/'
                },
                name: 'facetsManager'
            },
            managerParams: {
                'q': '*:*',
                'group': true,
                'group.field': ['pdb_id'],
                'group.ngroups': true,
                'group.facet': true,
                'facet': true,
                'rows': '0',
                'facet.limit': 100,
                'facet.mincount': 1,
                'facet.sort': 'count',
                'json.nl': 'map',
                'facet.field':
                    [
                        'experimental_method', 'entry_authors', 'pfam_name','superkingdom','genus','organism_scientific_name','citation_year','spacegroup','biological_process','biological_function','biological_cell_component','journal','assembly_composition','assembly_form','assembly_type','refinement_software','beam_source_type','detector','detector_type','diffraction_protocol','molecule_name','status','ec_number','cath_class','cath_topology','gene_name', 'compound_name','interpro_name','scop_class','scop_family','scop_fold','citation_authors','interacting_molecules','interacting_ligands','molecule_type','beam_source_name', 'synchrotron_site'
                    ],
                'facet.range':['deposition_year','release_year','resolution'],
                'f.deposition_year.facet.range.start':'1970',
                'f.deposition_year.facet.range.end':'2050',
                'f.deposition_year.facet.range.gap':'5',
                'f.release_year.facet.range.start':'1970',
                'f.release_year.facet.range.end':'2050',
                'f.release_year.facet.range.gap':'5',
                'f.resolution.facet.range.start':'0.0',
                'f.resolution.facet.range.end':'100',
                'f.resolution.facet.range.gap':'0.5',
                'f.deposition_year.facet.range.other' : 'between',
                'f.deposition_year.facet.range.include' : 'upper',
                'f.release_year.facet.range.other' : 'between',
                'f.release_year.facet.range.include' : 'upper',
                'f.resolution.facet.range.other' : 'between',
                'f.resolution.facet.range.include' : 'upper',
                'facet.threads': -1
            }
        }
'compound_name'
*/ 
var PDBe;
(function (PDBe) {
    var SolrApp;
    (function (SolrApp) {
        SolrApp.searchFieldsConfig = {
            text: {
                label: 'Text',
                name: ['text'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            bmrb_id: {
                label: 'BMRB ID',
                name: ['bmrb_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            emdb_id: {
                label: 'EMDB ID',
                name: ['emdb_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            go_id: {
                label: 'GO ID',
                name: ['go_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            interpro_accession: {
                label: 'Interpro accession',
                name: ['interpro_accession'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            pdb_id: {
                label: 'PDB ID',
                name: ['pdb_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            psi_id: {
                label: 'PSI ID',
                name: ['psi_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            fasta_sequence: {
                label: 'Using FASTA',
                name: ['fasta_sequence'],
                queryField: 'xjoin_fasta=true&bf=fasta(percentIdentity)&xjoin_fasta.external.sequence',
                type: 'largeString', relation: 'Equal to', condition: 'OR',
                dataType: 'fastaSequence',
                fqValue: '{!xjoin}xjoin_fasta',
                selectedValue: undefined,
                appendValueToParams: true,
                appendValueToFq: false
            },
            phmmer_sequence: {
                label: 'Using Phmmer',
                name: ['phmmer_sequence'],
                queryField: 'xjoin_phmmer.fl=*&xjoin_phmmer=true&xjoin_phmmer.external.sequence',
                type: 'largeString', relation: 'Equal to', condition: 'OR',
                dataType: 'phmmerSequence',
                fqValue: '{!xjoin}xjoin_phmmer',
                selectedValue: undefined,
                appendValueToParams: true,
                appendValueToFq: false
            },
            SG_center_name: {
                label: 'Center Name',
                name: ['SG_center_name', 'SG_full_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'SG_full_name',
                selectedValue: undefined
            },
            SG_full_name: {
                label: 'Center Name',
                name: ['SG_center_name', 'SG_full_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'SG_full_name',
                selectedValue: undefined
            },
            all_authors: {
                label: 'Author Name',
                name: ['all_authors'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'all_authors',
                selectedValue: undefined
            },
            all_molecule_names: {
                label: 'All Molecule Names',
                name: ['all_molecule_names'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'all_molecule_names',
                selectedValue: undefined
            },
            molecule_name: {
                label: 'Molecule Name',
                name: ['molecule_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'molecule_name',
                selectedValue: undefined
            },
            molecule_type: {
                label: 'Molecule type',
                name: ['molecule_type'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["Protein", "DNA", "RNA", "DNA/RNA hybrid", "D-Protein", "Polysaccharide(D)"],
                selectedValue: undefined
            },
            assembly_composition: {
                label: 'Composition',
                name: ['assembly_composition'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["protein structure", "protein/protein complex", "DNA/protein complex",
                    "RNA/protein complex", "DNA structure", "RNA structure", "RNA/RNA complex",
                    "DNA/RNA/protein complex", "DNA/RNA hybrid structure", "DNA/RNA complex",
                    "DNA/DNA/RNA hybrid/protein complex", "D-protein/protein complex", "DNA/DNA complex",
                    "D-protein structure", "DNA/RNA hybrid/RNA complex", "DNA/RNA hybrid/protein complex",
                    "DNA/DNA/RNA hybrid complex", "DNA/RNA hybrid/RNA/protein complex",
                    "DNA/RNA hybrid/DNA/RNA hybrid complex", "RNA/other complex", "RNA/polysaccharide complex",
                    "other/protein complex", "D-protein/RNA complex", "other structure"],
                selectedValue: undefined
            },
            assembly_form: {
                label: 'Form',
                name: ['assembly_form'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ['homo', 'hetero'],
                selectedValue: undefined
            },
            assembly_type: {
                label: 'Polymer count',
                label2: '-mer',
                name: ['assembly_type'],
                type: 'int', relation: '=', condition: 'OR',
                submitFilter: 'processAssemblyType',
                validation: 'numberOnly',
                selectedValue: undefined
            },
            atcc: {
                label: 'ATCC ID',
                name: ['atcc'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            beam_source_name: {
                label: 'Beam source name',
                name: ['beam_source_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["Synchrotron", "Rotating anode", "Sealed tube", "Free-electron laser", "Neutron source",
                    "Electron microscope", "TRANSMISSION ELECTRON MICROSCOPE", "NEUTRON SPALLATION SOURCE",
                    "Bruker", "Copper", "FRM II", "In-house source", "Compact light source",
                    "FRM-II NUCLEAR REACTOR", "IMAGINE CG4D HFIR", "LCLS", "MLZ", "MaruX home source",
                    "NUCLEAR REACTOR (INSTITUT LAUE LAN", "Other", "SEALED X-RAY TUBE", "SNS", "SNS/ORNL",
                    "SPALLATION"],
                selectedValue: undefined
            },
            beam_source_type: {
                label: 'Beam source type',
                name: ['beam_source_type'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'beam_source_type',
                selectedValue: undefined
            },
            biological_cell_component: {
                label: 'Biological cell component',
                name: ['biological_cell_component'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'biological_cell_component',
                selectedValue: undefined
            },
            biological_function: {
                label: 'Biological function',
                name: ['biological_function'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'biological_function',
                selectedValue: undefined
            },
            biological_process: {
                label: 'Biological process',
                name: ['biological_process'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'biological_process',
                selectedValue: undefined
            },
            cath_architecture: {
                label: 'CATH architecture',
                name: ['cath_architecture'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'cath_architecture',
                selectedValue: undefined
            },
            cath_class: {
                label: 'CATH class',
                name: ['cath_class'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["Alpha Beta", "Mainly Beta", "Mainly Alpha", "Few Secondary Structures"],
                selectedValue: undefined
            },
            cath_code: {
                label: 'CATH code',
                name: ['cath_code'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            cath_homologous_superfamily: {
                label: 'Homologous superfamily',
                name: ['cath_homologous_superfamily'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'cath_homologous_superfamily',
                selectedValue: undefined
            },
            cath_topology: {
                label: 'CATH topology',
                name: ['cath_topology'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'cath_topology',
                selectedValue: undefined
            },
            cell_a: {
                label: 'Cell a',
                name: ['cell_a'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            cell_alpha: {
                label: 'Cell alpha',
                name: ['cell_alpha'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            cell_b: {
                label: 'Cell b',
                name: ['cell_b'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            cell_beta: {
                label: 'Cell beta',
                name: ['cell_beta'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            cell_c: {
                label: 'Cell c',
                name: ['cell_c'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            cell_gamma: {
                label: 'Cell gamma',
                name: ['cell_gamma'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            chimera: {
                label: 'Chimera',
                name: ['chimera'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ['y', 'n'],
                selectedValue: undefined
            },
            citation_authors: {
                label: 'Authors',
                name: ['citation_authors'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'citation_authors',
                selectedValue: undefined
            },
            citation_doi: {
                label: 'DOI',
                name: ['citation_doi'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            citation_title: {
                label: 'Title',
                name: ['citation_title'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            citation_year: {
                label: 'Publication Year',
                name: ['citation_year'],
                type: 'int', relation: '=', condition: 'OR',
                validation: 'numberOnly',
                selectedValue: undefined
            },
            compound_id: {
                label: 'ID',
                name: ['compound_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            compound_name: {
                label: 'Name',
                name: ['compound_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'compound_name',
                selectedValue: undefined
            },
            compound_synonym: {
                label: 'Synonym',
                name: ['compound_synonym'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'compound_synonym',
                selectedValue: undefined
            },
            compound_systematic_name: {
                label: 'Systematic name',
                name: ['compound_systematic_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'compound_systematic_name',
                selectedValue: undefined
            },
            compound_weight: {
                label: 'Compound weight',
                name: ['compound_weight'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            crystallisation_ph: {
                label: 'pH',
                name: ['crystallisation_ph'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            crystallisation_reservoir: {
                label: 'Reservoir solution',
                name: ['crystallisation_reservoir'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'crystallisation_reservoir',
                selectedValue: undefined
            },
            data_quality: {
                label: 'Data quality',
                name: ['data_quality'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            data_reduction_software: {
                label: 'Reduction software',
                name: ['data_reduction_software'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'data_reduction_software',
                selectedValue: undefined
            },
            data_scaling_software: {
                label: 'Scaling software',
                name: ['data_scaling_software'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'data_scaling_software',
                selectedValue: undefined
            },
            deposition_date: {
                label: 'Deposition date',
                name: ['deposition_date'],
                type: 'date', relation: '=', condition: 'OR',
                format: 'YYYY-MM-DDThh:mm:ssZ',
                selectedValue: undefined
            },
            deposition_year: {
                label: 'Deposition year',
                name: ['deposition_year'],
                type: 'int', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            deposition_site: {
                label: 'Deposition site',
                name: ['deposition_site'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["RCSB", "PDBE", "PDBJ", "BMRB", "BNL", "EBI", "OSAKA", "NDB", "PDB"],
                selectedValue: undefined
            },
            detector: {
                label: 'Detector',
                name: ['detector'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'detector',
                selectedValue: undefined
            },
            detector_type: {
                label: 'Detector type',
                name: ['detector_type'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'detector_type',
                selectedValue: undefined
            },
            diffraction_protocol: {
                label: 'Diffraction protocol',
                name: ['diffraction_protocol'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'diffraction_protocol',
                selectedValue: undefined
            },
            ec_hierarchy_name: {
                label: 'EC hierarchy name',
                name: ['ec_hierarchy_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'ec_hierarchy_name',
                selectedValue: undefined
            },
            ec_number: {
                label: 'EC number',
                name: ['ec_number'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            entity_id: {
                label: 'Entity Id',
                name: ['entity_id'],
                type: 'int', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            entity_weight: {
                label: 'Macromolecule molecular weight',
                name: ['entity_weight'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            entry_authors: {
                label: 'Author',
                name: ['entry_authors'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            entry_list: {
                label: 'Author list',
                name: ['entry_list'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            organism_scientific_name: {
                label: 'Organism scientific name',
                name: ['organism_scientific_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'organism_scientific_name',
                selectedValue: undefined
            },
            enzyme_name: {
                label: 'Enzyme name',
                name: ['enzyme_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'enzyme_name',
                selectedValue: undefined
            },
            enzyme_systematic_name: {
                label: 'Enzyme systematic name',
                name: ['enzyme_systematic_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'enzyme_systematic_name',
                selectedValue: undefined
            },
            experiment_data_available: {
                label: 'Experiment data available',
                name: ['experiment_data_available'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ['y', 'n'],
                selectedValue: undefined
            },
            experimental_method: {
                label: 'Experimental method',
                name: ['experimental_method'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["X-ray diffraction", "Electron Microscopy", "Solution NMR", "Neutron Diffraction",
                    "Solid-state NMR", "Hybrid", "X-ray solution scattering", "Theoretical Model",
                    "Electron crystallography", "Fiber diffraction", "X-ray powder diffraction",
                    "X-RAY DIFFRACTION, NEUTRON DIFFRACTION", "EPR", "Infrared spectroscopy",
                    "Fluorescence transfer", "NEUTRON DIFFRACTION, X-RAY DIFFRACTION",
                    "NMR, 20 STRUCTURES.NMR", "Other"],
                selectedValue: undefined
            },
            expression_host_genus: {
                label: 'Genus',
                name: ['expression_host_genus'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            expression_host_sci_name: {
                label: 'Sci name',
                name: ['expression_host_sci_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'expression_host_sci_name',
                selectedValue: undefined
            },
            expression_host_strain: {
                label: 'Strain',
                name: ['expression_host_strain'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'expression_host_strain',
                selectedValue: undefined
            },
            expression_host_superkingdom: {
                label: 'Superkingdom',
                name: ['expression_host_superkingdom'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            expression_host_synonyms: {
                label: 'Synonyms',
                name: ['expression_host_synonyms'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'expression_host_synonyms',
                selectedValue: undefined
            },
            gene_name: {
                label: 'Gene name',
                name: ['gene_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            genus: {
                label: 'Genus',
                name: ['genus'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'genus',
                selectedValue: undefined
            },
            interacting_molecules: {
                label: 'Interacting molecule',
                name: ['interacting_molecules'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'interacting_molecules',
                selectedValue: undefined
            },
            interacting_ligands: {
                label: 'Interacting ligands',
                name: ['interacting_ligands'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'interacting_ligands',
                selectedValue: undefined
            },
            interpro_name: {
                label: 'Interpro name',
                name: ['interpro_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'interpro_name',
                selectedValue: undefined
            },
            journal: {
                label: 'Journal name',
                name: ['journal'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'journal',
                selectedValue: undefined
            },
            journal_volume: {
                label: 'Journal volume',
                name: ['journal_volume'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            max_observed_residues: {
                label: 'Max observed residues',
                name: ['max_observed_residues'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            microheterogeneity: {
                label: 'Microheterogeneity',
                name: ['microheterogeneity'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ['y', 'n'],
                selectedValue: undefined
            },
            mutation: {
                label: 'Mutation',
                name: ['mutation'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            mutation_type: {
                label: 'Mutation type',
                name: ['mutation_type'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'mutation_type',
                selectedValue: undefined
            },
            na_conf_features: {
                label: 'Nucleic acid conf features',
                name: ['na_conf_features'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["double helix", "a-form double helix", "mismatched base pair", "hairpin loop",
                    "bulge loop", "internal loop", "triple helix", "three-way junction", "four-way junction",
                    "tetraloop", "quadruple helix", "parallel strands", "b-form double helix",
                    "z-form double helix"]
            },
            organism_synonyms: {
                label: 'Organism synonyms',
                name: ['organism_synonyms'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'organism_synonyms',
                selectedValue: undefined
            },
            pfam_accession: {
                label: 'Pfam accession',
                name: ['pfam_accession'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            pfam_clan_name: {
                label: 'Pfam name',
                name: ['pfam_clan_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'pfam_clan_name',
                selectedValue: undefined
            },
            pfam_description: {
                label: 'Pfam description',
                name: ['pfam_description'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'pfam_description',
                selectedValue: undefined
            },
            pfam_name: {
                label: 'Pfam name',
                name: ['pfam_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'pfam_name',
                selectedValue: undefined
            },
            phasing_method: {
                label: 'Phasing method',
                name: ['phasing_method'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["MR", "MAD", "SAD", "mr", "SIRAS", "MIRAS", "MIR", "sad", "ML", "SIR", "mad", "MAD+MR",
                    "MAD/MR", "SAD+MR", "AB_INITIO", "M.R.", "MR+MAD", "MR+SAD", "MR/MAD", "NONE"],
                selectedValue: undefined
            },
            prd_class: {
                label: 'Prd class',
                name: ['prd_class'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'prd_class',
                selectedValue: undefined
            },
            prd_name: {
                label: 'Prd name',
                name: ['prd_name'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'prd_name',
                selectedValue: undefined
            },
            prd_type: {
                label: 'Prd type',
                name: ['prd_type'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["Peptide-like", "Oligopeptide", "Cyclic peptide", "Polypeptide", "Glycopeptide",
                    "Cyclic depsipeptide", "Thiopeptide", "Peptaibol", "Cyclic lipopeptide", "Lipopeptide",
                    "Chalkophore, Polypeptide", "Lipoglycopeptide", "Macrolide", "peptide-like"],
                selectedValue: undefined
            },
            processing_site: {
                label: 'Processing site',
                name: ['processing_site'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["RCSB", "PDBE", "PDBJ", "OSAKA", "EBI", "NDB", "PDB", "BNL", "PRAGUE"],
                selectedValue: undefined
            },
            pubmed_id: {
                label: 'Pubmed id',
                name: ['pubmed_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            pubmed_authors: {
                label: 'Pubmed authors',
                name: ['pubmed_authors'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'pubmed_authors',
                selectedValue: undefined
            },
            rank: {
                label: 'Taxonomic Rank',
                name: ['rank'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["superkingdom", "kingdom", "phylum", "class", "order",
                    "family", "subfamily", "genus", "species"],
                selectedValue: undefined
            },
            refinement_software: {
                label: 'Refinement software',
                name: ['refinement_software'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'refinement_software',
                selectedValue: undefined
            },
            release_date: {
                label: 'Release date',
                name: ['release_date'],
                type: 'date', relation: '=', condition: 'OR',
                format: 'YYYY-MM-DDThh:mm:ssZ',
                selectedValue: undefined
            },
            release_year: {
                label: 'Release year',
                name: ['release_year'],
                type: 'int', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            resolution: {
                label: 'Resolution',
                name: ['resolution'],
                type: 'float', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            revision_date: {
                label: 'Revision date',
                name: ['revision'],
                type: 'date', relation: '=', condition: 'OR',
                format: 'YYYY-MM-DDThh:mm:ssZ',
                selectedValue: undefined
            },
            revision_year: {
                label: 'Revision year',
                name: ['revision_year'],
                type: 'int', relation: '=', condition: 'OR',
                selectedValue: undefined
            },
            sample_preparation_method: {
                label: 'Sample preparation method',
                name: ['sample_preparation_method'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["Engineered", "Natural", "Synthetic"],
                selectedValue: undefined
            },
            scop_class: {
                label: 'SCOP class',
                name: ['scop_class'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'scop_class',
                selectedValue: undefined
            },
            scop_family: {
                label: 'SCOP family',
                name: ['scop_family'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'scop_family',
                selectedValue: undefined
            },
            scop_fold: {
                label: 'SCOP fold',
                name: ['scop_fold'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'scop_fold',
                selectedValue: undefined
            },
            scop_superfamily: {
                label: 'SCOP superfamily',
                name: ['scop_superfamily'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'scop_superfamily',
                selectedValue: undefined
            },
            spacegroup: {
                label: 'Spacegroup',
                name: ['spacegroup'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'spacegroup',
                selectedValue: undefined
            },
            status: {
                label: 'Entry status',
                name: ['status'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                value: ["REL", "WDRN", "HPUB", "OBS", "AUTH", "PROC", "HOLD", "REPL", "POLC", "WAIT", "AUCO", "REFI"],
                selectedValue: undefined
            },
            structure_determination_method: {
                label: 'Structure determination method',
                name: ['structure_determination_method'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'structure_determination_method',
                selectedValue: undefined
            },
            structure_solution_software: {
                label: 'Structure solution software',
                name: ['structure_solution_software'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'structure_solution_software',
                selectedValue: undefined
            },
            superkingdom: {
                label: 'Superkingdom',
                name: ['superkingdom'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'superkingdom',
                selectedValue: undefined
            },
            synchrotron_beamline: {
                label: 'Synchrotron beamline',
                name: ['synchrotron_beamline'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'synchrotron_beamline',
                selectedValue: undefined
            },
            synchrotron_site: {
                label: 'Synchrotron site',
                name: ['synchrotron_site'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'synchrotron_site',
                selectedValue: undefined
            },
            title: {
                label: 'Title',
                name: ['title'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'title',
                selectedValue: undefined
            },
            uniprot_accession: {
                label: 'Uniprot accession',
                name: ['uniprot_accession'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            },
            uniprot_features: {
                label: 'Uniprot features',
                name: ['uniprot_features'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                autocompleteField: 'uniprot_features',
                selectedValue: undefined
            },
            uniprot_id: {
                label: 'Uniprot id',
                name: ['uniprot_id'],
                type: 'string', relation: 'Equal to', condition: 'OR',
                selectedValue: undefined
            }
        };
    })(SolrApp = PDBe.SolrApp || (PDBe.SolrApp = {}));
})(PDBe || (PDBe = {}));
var PDBe;
(function (PDBe) {
    var SolrApp;
    (function (SolrApp) {
        SolrApp.searchFieldsGrouping = [
            {
                categoryLabel: 'Text',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Text',
                        groupFields: [{
                                label: 'Text',
                                name: ['text'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            }, {
                categoryLabel: 'IDs',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'PDB ID',
                        groupFields: [{
                                label: 'PDB ID',
                                name: ['pdb_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }, {
                        groupLabel: 'BMRB ID',
                        groupFields: [{
                                label: 'BMRB ID',
                                name: ['bmrb_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'EMDB ID',
                        groupFields: [{
                                label: 'EMDB ID',
                                name: ['emdb_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'GO ID',
                        groupFields: [{
                                label: 'GO ID',
                                name: ['go_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'PSI ID',
                        groupFields: [{
                                label: 'PSI ID',
                                name: ['psi_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Title',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Title',
                        groupFields: [{
                                label: 'Title',
                                name: ['title'],
                                type: 'string',
                                autocompleteField: 'title',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Sequence search',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Using FASTA',
                        groupFields: [{
                                label: 'FASTA Sequence',
                                name: ['fasta_sequence'],
                                queryField: 'xjoin_fasta=true&bf=fasta(percentIdentity)&xjoin_fasta.external.sequence',
                                type: 'largeString',
                                dataType: 'fastaSequence',
                                fqValue: '{!xjoin}xjoin_fasta',
                                selectedValue: undefined,
                                appendValueToParams: true,
                                appendValueToFq: false
                            }]
                    },
                    {
                        groupLabel: 'Using Phmmer',
                        groupFields: [{
                                label: 'Phmmer Sequence',
                                name: ['phmmer_sequence'],
                                queryField: 'xjoin_phmmer.fl=*&xjoin_phmmer=true&xjoin_phmmer.external.sequence',
                                type: 'largeString',
                                dataType: 'phmmerSequence',
                                fqValue: '{!xjoin}xjoin_phmmer',
                                selectedValue: undefined,
                                appendValueToParams: true,
                                appendValueToFq: false
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Author Name',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Author Name',
                        groupFields: [{
                                label: 'Author Name',
                                name: ['all_authors'],
                                type: 'string',
                                autocompleteField: 'all_authors',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Center Name',
                        groupFields: [{
                                label: 'Center Name',
                                name: ['SG_center_name', 'SG_full_name'],
                                type: 'string',
                                autocompleteField: 'SG_full_name',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Macromolecules',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'All Molecule Names',
                        groupFields: [{
                                label: 'All Molecule Names',
                                name: ['all_molecule_names'],
                                type: 'string',
                                autocompleteField: 'all_molecule_names',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Molecule Name',
                        groupFields: [{
                                label: 'Molecule Name',
                                name: ['molecule_name'],
                                type: 'string',
                                autocompleteField: 'molecule_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Molecule type',
                        groupFields: [{
                                label: 'Molecule type',
                                name: ['molecule_type'],
                                type: 'string',
                                value: ["Protein", "DNA", "RNA", "DNA/RNA hybrid", "D-Protein", "Polysaccharide(D)"],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Gene name',
                        groupFields: [{
                                label: 'Gene name',
                                name: ['gene_name'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Macromolecule molecular weight',
                        groupFields: [{
                                label: 'Macromolecule molecular weight',
                                name: ['entity_weight'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Assembly',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Composition',
                        groupFields: [{
                                label: 'Composition',
                                name: ['assembly_composition'],
                                type: 'string',
                                autocompleteField: 'assembly_composition',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Form',
                        groupFields: [{
                                label: 'Form',
                                name: ['assembly_form'],
                                type: 'string',
                                value: ['homo', 'hetero'],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Polymer count',
                        groupFields: [{
                                label: 'Polymer count',
                                label2: '-mer',
                                name: ['assembly_type'],
                                type: 'int',
                                submitFilter: 'processAssemblyType',
                                validation: 'numberOnly',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'GO terms',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Biological cell component',
                        groupFields: [{
                                label: 'Biological cell component',
                                name: ['biological_cell_component'],
                                type: 'string',
                                autocompleteField: 'biological_cell_component',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Biological function',
                        groupFields: [{
                                label: 'Biological function',
                                name: ['biological_function'],
                                type: 'string',
                                autocompleteField: 'biological_function',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Biological process',
                        groupFields: [{
                                label: 'Biological process',
                                name: ['biological_process'],
                                type: 'string',
                                autocompleteField: 'biological_process',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Crystallographic cell parameters',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Cell a',
                        groupFields: [{
                                label: 'Cell a',
                                name: ['cell_a'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Cell alpha',
                        groupFields: [{
                                label: 'Cell alpha',
                                name: ['cell_alpha'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Cell b',
                        groupFields: [{
                                label: 'Cell b',
                                name: ['cell_b'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Cell beta',
                        groupFields: [{
                                label: 'Cell beta',
                                name: ['cell_beta'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Cell c',
                        groupFields: [{
                                label: 'Cell c',
                                name: ['cell_c'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Cell gamma',
                        groupFields: [{
                                label: 'Cell gamma',
                                name: ['cell_gamma'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Chimera',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Chimera',
                        groupFields: [{
                                label: 'Chimera',
                                name: ['chimera'],
                                type: 'string',
                                value: ['y', 'n'],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Compound',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'ID',
                        groupFields: [{
                                label: 'ID',
                                name: ['compound_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Name',
                        groupFields: [{
                                label: 'Name',
                                name: ['compound_name'],
                                type: 'string',
                                autocompleteField: 'compound_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Synonym',
                        groupFields: [{
                                label: 'Synonym',
                                name: ['compound_synonym'],
                                type: 'string',
                                autocompleteField: 'compound_synonym',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Systematic name',
                        groupFields: [{
                                label: 'Systematic name',
                                name: ['compound_systematic_name'],
                                type: 'string',
                                autocompleteField: 'compound_systematic_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Molecular weight',
                        groupFields: [{
                                label: 'Molecular weight',
                                name: ['compound_weight'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Crystallisation pH/ reservoir',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'pH',
                        groupFields: [{
                                label: 'pH',
                                name: ['crystallisation_ph'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Reservoir solution',
                        groupFields: [{
                                label: 'Reservoir solution',
                                name: ['crystallisation_reservoir'],
                                type: 'string',
                                autocompleteField: 'crystallisation_reservoir',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Data quality/ software ',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Data quality',
                        groupFields: [{
                                label: 'Data quality',
                                name: ['data_quality'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Reduction software',
                        groupFields: [{
                                label: 'Reduction software',
                                name: ['data_reduction_software'],
                                type: 'string',
                                autocompleteField: 'data_reduction_software',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Scaling software',
                        groupFields: [{
                                label: 'Scaling software',
                                name: ['data_scaling_software'],
                                type: 'string',
                                autocompleteField: 'data_scaling_software',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Refinement software',
                        groupFields: [{
                                label: 'Refinement software',
                                name: ['refinement_software'],
                                type: 'string',
                                autocompleteField: 'refinement_software',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Structure solution software',
                        groupFields: [{
                                label: 'Structure solution software',
                                name: ['structure_solution_software'],
                                type: 'string',
                                autocompleteField: 'structure_solution_software',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Deposition date/ site',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Deposition date',
                        groupFields: [{
                                label: 'Deposition date',
                                name: ['deposition_date'],
                                type: 'date',
                                format: 'YYYY-MM-DDThh:mm:ssZ',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Deposition year',
                        groupFields: [{
                                label: 'Deposition year',
                                name: ['deposition_year'],
                                type: 'int',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Deposition site',
                        groupFields: [{
                                label: 'Deposition site',
                                name: ['deposition_site'],
                                type: 'string',
                                value: ["RCSB", "PDBE", "PDBJ", "BMRB", "BNL", "EBI", "OSAKA", "NDB", "PDB"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Detector',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Detector',
                        groupFields: [{
                                label: 'Detector',
                                name: ['detector'],
                                type: 'string',
                                autocompleteField: 'detector',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Detector type',
                        groupFields: [{
                                label: 'Detector type',
                                name: ['detector_type'],
                                type: 'string',
                                autocompleteField: 'detector_type',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Diffraction protocol',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Diffraction protocol',
                        groupFields: [{
                                label: 'Diffraction protocol',
                                name: ['diffraction_protocol'],
                                type: 'string',
                                autocompleteField: 'diffraction_protocol',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Entry author',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Author',
                        groupFields: [{
                                label: 'Author',
                                name: ['entry_authors'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Author list',
                        groupFields: [{
                                label: 'Author list',
                                name: ['entry_list'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Organism',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Organism scientific name',
                        groupFields: [{
                                label: 'Organism scientific name',
                                name: ['organism_scientific_name'],
                                type: 'string',
                                autocompleteField: 'organism_scientific_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'ATCC ID',
                        groupFields: [{
                                label: 'ATCC ID',
                                name: ['atcc'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Genus',
                        groupFields: [{
                                label: 'Genus',
                                name: ['genus'],
                                type: 'string',
                                autocompleteField: 'genus',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Taxonomic Rank',
                        groupFields: [{
                                label: 'Taxonomic Rank',
                                name: ['rank'],
                                type: 'string',
                                value: ["superkingdom", "kingdom", "phylum", "class", "order",
                                    "family", "subfamily", "genus", "species"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Enzyme name',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Enzyme name',
                        groupFields: [{
                                label: 'Enzyme name',
                                name: ['enzyme_name'],
                                type: 'string',
                                autocompleteField: 'enzyme_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Enzyme systematic name',
                        groupFields: [{
                                label: 'Enzyme systematic name',
                                name: ['enzyme_systematic_name'],
                                type: 'string',
                                autocompleteField: 'enzyme_systematic_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'EC hierarchy name',
                        groupFields: [{
                                label: 'EC hierarchy name',
                                name: ['ec_hierarchy_name'],
                                type: 'string',
                                autocompleteField: 'ec_hierarchy_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'EC number',
                        groupFields: [{
                                label: 'EC number',
                                name: ['ec_number'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Experiment',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Experiment data available',
                        groupFields: [{
                                label: 'Experiment data available',
                                name: ['experiment_data_available'],
                                type: 'string',
                                value: ['y', 'n'],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Experimental method',
                        groupFields: [{
                                label: 'Experimental method',
                                name: ['experimental_method'],
                                type: 'string',
                                value: ["X-ray diffraction", "Electron Microscopy", "Solution NMR", "Neutron Diffraction",
                                    "Solid-state NMR", "Hybrid", "X-ray solution scattering", "Theoretical Model",
                                    "Electron crystallography", "Fiber diffraction", "X-ray powder diffraction",
                                    "X-RAY DIFFRACTION, NEUTRON DIFFRACTION", "EPR", "Infrared spectroscopy",
                                    "Fluorescence transfer", "NEUTRON DIFFRACTION, X-RAY DIFFRACTION",
                                    "NMR, 20 STRUCTURES.NMR", "Other"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Expression host data',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Genus',
                        groupFields: [{
                                label: 'Genus',
                                name: ['expression_host_genus'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Sci name',
                        groupFields: [{
                                label: 'Sci name',
                                name: ['expression_host_sci_name'],
                                type: 'string',
                                autocompleteField: 'expression_host_sci_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Strain',
                        groupFields: [{
                                label: 'Strain',
                                name: ['expression_host_strain'],
                                type: 'string',
                                autocompleteField: 'expression_host_strain',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Superkingdom',
                        groupFields: [{
                                label: 'Superkingdom',
                                name: ['expression_host_superkingdom'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Synonyms',
                        groupFields: [{
                                label: 'Synonyms',
                                name: ['expression_host_synonyms'],
                                type: 'string',
                                autocompleteField: 'expression_host_synonyms',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Interacting ligands',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Interacting ligands',
                        groupFields: [{
                                label: 'Interacting ligands',
                                name: ['interacting_ligands'],
                                type: 'string',
                                autocompleteField: 'interacting_ligands',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Sequence classification',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Interpro accession',
                        groupFields: [{
                                label: 'Interpro accession',
                                name: ['interpro_accession'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Interpro name',
                        groupFields: [{
                                label: 'Interpro name',
                                name: ['interpro_name'],
                                type: 'string',
                                autocompleteField: 'interpro_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pfam accession',
                        groupFields: [{
                                label: 'Pfam accession',
                                name: ['pfam_accession'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pfam name',
                        groupFields: [{
                                label: 'Pfam name',
                                name: ['pfam_clan_name'],
                                type: 'string',
                                autocompleteField: 'pfam_clan_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pfam description',
                        groupFields: [{
                                label: 'pfam description',
                                name: ['pfam_description'],
                                type: 'string',
                                autocompleteField: 'pfam_description',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pfam name',
                        groupFields: [{
                                label: 'Pfam name',
                                name: ['pfam_name'],
                                type: 'string',
                                autocompleteField: 'pfam_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Uniprot accession',
                        groupFields: [{
                                label: 'Uniprot accession',
                                name: ['uniprot_accession'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Uniprot features',
                        groupFields: [{
                                label: 'Uniprot features',
                                name: ['uniprot_features'],
                                type: 'string',
                                autocompleteField: 'uniprot_features',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Uniprot id',
                        groupFields: [{
                                label: 'Uniprot id',
                                name: ['uniprot_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Journal',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Journal name',
                        groupFields: [{
                                label: 'Journal',
                                name: ['journal'],
                                type: 'string',
                                autocompleteField: 'journal',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Journal volume',
                        groupFields: [{
                                label: 'Journal volume',
                                name: ['journal_volume'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Authors',
                        groupFields: [{
                                label: 'Authors',
                                name: ['citation_authors'],
                                type: 'string',
                                autocompleteField: 'citation_authors',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'DOI',
                        groupFields: [{
                                label: 'DOI',
                                name: ['citation_doi'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Title',
                        groupFields: [{
                                label: 'Title',
                                name: ['citation_title'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Publication year',
                        groupFields: [{
                                label: 'Publication year',
                                name: ['citation_year'],
                                type: 'int',
                                validation: 'numberOnly',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pubmed id',
                        groupFields: [{
                                label: 'Pubmed id',
                                name: ['pubmed_id'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Pubmed authors',
                        groupFields: [{
                                label: 'Pubmed authors',
                                name: ['pubmed_authors'],
                                type: 'string',
                                autocompleteField: 'pubmed_authors',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Max observed residues',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Max observed residues',
                        groupFields: [{
                                label: 'Max observed residues',
                                name: ['max_observed_residues'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Microheterogeneity',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Microheterogeneity',
                        groupFields: [{
                                label: 'Microheterogeneity',
                                name: ['microheterogeneity'],
                                type: 'string',
                                value: ['y', 'n'],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Mutation type',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Mutation',
                        groupFields: [{
                                label: 'Mutation',
                                name: ['mutation'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Mutation type',
                        groupFields: [{
                                label: 'Mutation type',
                                name: ['mutation_type'],
                                type: 'string',
                                autocompleteField: 'mutation_type',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Nucleic acid conf features',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Nucleic acid conf features',
                        groupFields: [{
                                label: 'Nucleic acid conf features',
                                name: ['na_conf_features'],
                                type: 'string',
                                value: ["double helix", "a-form double helix", "mismatched base pair", "hairpin loop",
                                    "bulge loop", "internal loop", "triple helix", "three-way junction", "four-way junction",
                                    "tetraloop", "quadruple helix", "parallel strands", "b-form double helix",
                                    "z-form double helix"]
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Organism synonyms',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Organism synonyms',
                        groupFields: [{
                                label: 'Organism synonyms',
                                name: ['organism_synonyms'],
                                type: 'string',
                                autocompleteField: 'organism_synonyms',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Phasing/ Structure determination method',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Phasing method',
                        groupFields: [{
                                label: 'Phasing method',
                                name: ['phasing_method'],
                                type: 'string',
                                value: ["MR", "MAD", "SAD", "mr", "SIRAS", "MIRAS", "MIR", "sad", "ML", "SIR", "mad", "MAD+MR",
                                    "MAD/MR", "SAD+MR", "AB_INITIO", "M.R.", "MR+MAD", "MR+SAD", "MR/MAD", "NONE"],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Structure determination method',
                        groupFields: [{
                                label: 'Structure determination method',
                                name: ['structure_determination_method'],
                                type: 'string',
                                autocompleteField: 'structure_determination_method',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Prd class/ name/ type',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Prd class',
                        groupFields: [{
                                label: 'Prd class',
                                name: ['prd_class'],
                                type: 'string',
                                autocompleteField: 'prd_class',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Prd name',
                        groupFields: [{
                                label: 'Prd name',
                                name: ['prd_name'],
                                type: 'string',
                                autocompleteField: 'prd_name',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Prd type',
                        groupFields: [{
                                label: 'Prd type',
                                name: ['prd_type'],
                                type: 'string',
                                value: ["Peptide-like", "Oligopeptide", "Cyclic peptide", "Polypeptide", "Glycopeptide",
                                    "Cyclic depsipeptide", "Thiopeptide", "Peptaibol", "Cyclic lipopeptide", "Lipopeptide",
                                    "Chalkophore, Polypeptide", "Lipoglycopeptide", "Macrolide", "peptide-like"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Processing site',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Processing site',
                        groupFields: [{
                                label: 'Processing site',
                                name: ['processing_site'],
                                type: 'string',
                                value: ["RCSB", "PDBE", "PDBJ", "OSAKA", "EBI", "NDB", "PDB", "BNL", "PRAGUE"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Resolution',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Resolution',
                        groupFields: [{
                                label: 'Resolution',
                                name: ['resolution'],
                                type: 'float',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Release/Revision',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Release date',
                        groupFields: [{
                                label: 'Release date',
                                name: ['release_date'],
                                type: 'date',
                                format: 'YYYY-MM-DDThh:mm:ssZ',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Release year',
                        groupFields: [{
                                label: 'Release year',
                                name: ['release_year'],
                                type: 'int',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Revision date',
                        groupFields: [{
                                label: 'Revision date',
                                name: ['revision_date'],
                                type: 'date',
                                format: 'YYYY-MM-DDThh:mm:ssZ',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Revision year',
                        groupFields: [{
                                label: 'Revision year',
                                name: ['revision_year'],
                                type: 'int',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Sample preparation method',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Sample preparation method',
                        groupFields: [{
                                label: 'Sample preparation method',
                                name: ['sample_preparation_method'],
                                type: 'string',
                                value: ["Engineered", "Natural", "Synthetic"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Structure classification',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'SCOP family',
                        groupFields: [{
                                label: 'SCOP family',
                                name: ['scop_family'],
                                type: 'string',
                                autocompleteField: 'scop_family',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'SCOP fold',
                        groupFields: [{
                                label: 'SCOP fold',
                                name: ['scop_fold'],
                                type: 'string',
                                autocompleteField: 'scop_fold',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'SCOP superfamily',
                        groupFields: [{
                                label: 'SCOP superfamily',
                                name: ['scop_superfamily'],
                                type: 'string',
                                autocompleteField: 'scop_superfamily',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'CATH architecture',
                        groupFields: [{
                                label: 'CATH architecture',
                                name: ['cath_architecture'],
                                type: 'string',
                                autocompleteField: 'cath_architecture',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'CATH class',
                        groupFields: [{
                                label: 'CATH class',
                                name: ['cath_class'],
                                type: 'string',
                                value: ["Alpha Beta", "Mainly Beta", "Mainly Alpha", "Few Secondary Structures"],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'CATH code',
                        groupFields: [{
                                label: 'CATH code',
                                name: ['cath_code'],
                                type: 'string',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Homologous superfamily',
                        groupFields: [{
                                label: 'Homologous superfamily',
                                name: ['cath_homologous_superfamily'],
                                type: 'string',
                                autocompleteField: 'cath_homologous_superfamily',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'CATH topology',
                        groupFields: [{
                                label: 'CATH topology',
                                name: ['cath_topology'],
                                type: 'string',
                                autocompleteField: 'cath_topology',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Spacegroup',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Spacegroup',
                        groupFields: [{
                                label: 'Spacegroup',
                                name: ['spacegroup'],
                                type: 'string',
                                autocompleteField: 'spacegroup',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Entry status',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Entry status',
                        groupFields: [{
                                label: 'Entry status',
                                name: ['status'],
                                type: 'string',
                                value: ["REL", "WDRN", "HPUB", "OBS", "AUTH", "PROC", "HOLD", "REPL", "POLC", "WAIT", "AUCO", "REFI"],
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Superkingdom',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Superkingdom',
                        groupFields: [{
                                label: 'Superkingdom',
                                name: ['superkingdom'],
                                type: 'string',
                                autocompleteField: 'superkingdom',
                                selectedValue: undefined
                            }]
                    }
                ]
            },
            {
                categoryLabel: 'Synchrotron beamline/ site',
                categoryActive: true,
                categoryFields: [
                    {
                        groupLabel: 'Synchrotron beamline',
                        groupFields: [{
                                label: 'Synchrotron beamline',
                                name: ['synchrotron_beamline'],
                                type: 'string',
                                autocompleteField: 'synchrotron_beamline',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Synchrotron site',
                        groupFields: [{
                                label: 'Synchrotron site',
                                name: ['synchrotron_site'],
                                type: 'string',
                                autocompleteField: 'synchrotron_site',
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Diffraction source/ Beam source name',
                        groupFields: [{
                                label: 'Diffraction source/ Beam source name',
                                name: ['beam_source_name'],
                                type: 'string',
                                value: ["Synchrotron", "Rotating anode", "Sealed tube", "Free-electron laser", "Neutron source",
                                    "Electron microscope", "TRANSMISSION ELECTRON MICROSCOPE", "NEUTRON SPALLATION SOURCE",
                                    "Bruker", "Copper", "FRM II", "In-house source", "Compact light source",
                                    "FRM-II NUCLEAR REACTOR", "IMAGINE CG4D HFIR", "LCLS", "MLZ", "MaruX home source",
                                    "NUCLEAR REACTOR (INSTITUT LAUE LAN", "Other", "SEALED X-RAY TUBE", "SNS", "SNS/ORNL",
                                    "SPALLATION"],
                                selectedValue: undefined
                            }]
                    },
                    {
                        groupLabel: 'Diffraction type/ Beam source type',
                        groupFields: [{
                                label: 'Diffraction type/ Beam source type',
                                name: ['beam_source_type'],
                                type: 'string',
                                autocompleteField: 'beam_source_type',
                                selectedValue: undefined
                            }]
                    }
                ]
            }
        ];
    })(SolrApp = PDBe.SolrApp || (PDBe.SolrApp = {}));
})(PDBe || (PDBe = {}));
var AjaxSolr;
(function (AjaxSolr) {
    "use strict";
    /**
     * Consider replacing this function by ES6 Object.assign
     * @see https://github.com/documentcloud/underscore/blob/7342e289aa9d91c5aacfb3662ea56e7a6d081200/underscore.js#L789
    */
    function extend(child, param1, param2) {
        // From _.extend
        var obj = Array.prototype.slice.call(arguments, 1);
        // From _.extend
        var iterator = function (source) {
            if (source) {
                for (var prop in source) {
                    child[prop] = source[prop];
                }
            }
        };
        // From _.each
        if (obj == null)
            return;
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator);
        }
        else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                iterator.call(undefined, obj[i], i, obj);
            }
        }
        else {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    iterator.call(undefined, obj[key], key, obj);
                }
            }
        }
        return child;
    }
    AjaxSolr.extend = extend;
    ;
    /**
     * @param value A value.
     * @param array An array.
     * @returns {Boolean} Whether value exists in the array.
     */
    function inArray(value, array) {
        if (array) {
            for (var i = 0, l = array.length; i < l; i++) {
                if (equals(array[i], value)) {
                    return i;
                }
            }
        }
        return -1;
    }
    AjaxSolr.inArray = inArray;
    ;
    /**
     * @static
     * @param foo A value.
     * @param bar A value.
     * @returns {Boolean} Whether the two given values are equal.
     */
    function equals(foo, bar) {
        if (isArray(foo) && isArray(bar)) {
            if (foo.length !== bar.length) {
                return false;
            }
            for (var i = 0, l = foo.length; i < l; i++) {
                if (foo[i] !== bar[i]) {
                    return false;
                }
            }
            return true;
        }
        else if (isRegExp(foo) && isString(bar)) {
            return bar.match(foo);
        }
        else if (isRegExp(bar) && isString(foo)) {
            return foo.match(bar);
        }
        else {
            return foo === bar;
        }
    }
    AjaxSolr.equals = equals;
    ;
    /**
     * Can't use toString.call(obj) === "[object Array]", as it may return
     * "[xpconnect wrapped native prototype]", which is undesirable.
     *
     * @static
     * @see http://thinkweb2.com/projects/prototype/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
     * @see http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.3/prototype.js
     */
    function isArray(obj) {
        return obj != null && typeof obj == 'object' && 'splice' in obj && 'join' in obj;
    }
    AjaxSolr.isArray = isArray;
    ;
    /**
     * @param obj Any object.
     * @returns {Boolean} Whether the object is a RegExp object.
     */
    function isRegExp(obj) {
        return obj != null && (typeof obj == 'object' || typeof obj == 'function') && 'ignoreCase' in obj;
    }
    AjaxSolr.isRegExp = isRegExp;
    ;
    /**
     * @param obj Any object.
     * @returns {Boolean} Whether the object is a String object.
     */
    function isString(obj) {
        return obj != null && typeof obj == 'string';
    }
    AjaxSolr.isString = isString;
    ;
    /**
     * @param obj Any object.
     * @returns {Boolean} Whether the object is a String object.
     */
    function createManagerStore(managerJsonArr) {
        var store = {};
        for (var i = 0, len = managerJsonArr.length; i < len; i++) {
            var managerConfigData = managerJsonArr[i];
            //create manager instance
            store[managerConfigData.managerDetails.name] = new AjaxSolr.Manager(managerConfigData.managerDetails);
            //add params to the store
            for (var paramName in managerConfigData.managerParams) {
                store[managerConfigData.managerDetails.name].store.addByValue(paramName, managerConfigData.managerParams[paramName]);
            }
        }
        return store;
    }
    AjaxSolr.createManagerStore = createManagerStore;
    ;
})(AjaxSolr || (AjaxSolr = {}));
var AjaxSolr;
(function (AjaxSolr) {
    "use strict";
    /**
     * The Manager acts as the controller in a Model-View-Controller framework. All
     * public calls should be performed on the manager object.
     *
     * @param properties A map of fields to set. Refer to the list of public fields.
     * @class Manager
     */
    var Manager = (function () {
        /**
         * @param {Object} [attributes]
         * @param {String} [attributes.solrUrl] The fully-qualified URL of the Solr
         *   application. You must include the trailing slash. Do not include the path
         *   to any Solr servlet. Defaults to "http://localhost:8983/solr/"
         * @param {String} [attributes.proxyUrl] If we want to proxy queries through a
         *   script, rather than send queries to Solr directly, set this field to the
         *   fully-qualified URL of the script.
         * @param {String} [attributes.servlet] The default Solr servlet. You may
         *   prepend the servlet with a core if using multiple cores. Defaults to
         *   "servlet".
         */
        function Manager(attributes) {
            this.name = 'solrManager';
            this.solrUrl = { 'normal': 'http://localhost:8983/solr/', 'latest': 'http://localhost:8983/solr/' };
            this.servlet = 'select';
            //extend arguments
            AjaxSolr.extend(this, this, attributes);
            //Set Parameter Store
            this.setStore(this.store);
        }
        /**
         * Set the manager's parameter store.
         *
         * @param {AjaxSolr.ParameterStore} store
         */
        Manager.prototype.setStore = function (store) {
            this.store = store ? store : new AjaxSolr.ParameterStore();
        };
        /**
         * Stores the Solr parameters to be sent to Solr and sends a request to Solr.
         *
         * @param {Boolean} [start] The Solr start offset parameter.
         * @param {String} [servlet] The Solr servlet to send the request to.
         */
        Manager.prototype.doRequest = function (start, servlet) {
            // Allow non-pagination widgets to reset the offset parameter.
            if (start !== undefined) {
                this.store.get('start').val(start);
            }
            if (servlet === undefined) {
                servlet = this.servlet;
            }
            //this.store.save(); //save the state 
            this.executeRequest(servlet);
        };
        /**
         * An abstract hook for child implementations.
         *
         * <p>Sends the request to Solr, i.e. to <code>this.solrUrl</code> or <code>
         * this.proxyUrl</code>, and receives Solr's response. It should pass Solr's
         * response to <code>handleResponse()</code> for handling.</p>
         *
         * <p>See <tt>managers/Manager.jquery.js</tt> for a jQuery implementation.</p>
         *
         * @param {String} servlet The Solr servlet to send the request to.
         * @param {String} string The query string of the request. If not set, it
         *   should default to <code>this.store.string()</code>
         * @throws If not defined in child implementation.
         */
        Manager.prototype.executeRequest = function (servlet, qstring) {
            //throw 'Abstract method executeRequest must be overridden in a subclass.';
            qstring = qstring || this.store.string();
            console.log(this.solrUrl + servlet + '?' + qstring + '&wt=json');
        };
        /**
         * This method is executed after the Solr response data arrives. Allows each
         * widget to handle Solr's response separately.
         *
         * @param {Object} data The Solr response.
         */
        Manager.prototype.handleResponse = function (data) {
            this.response = data;
        };
        /**
         * This method is executed if Solr encounters an error.
         *
         * @param {String} message An error message.
         */
        Manager.prototype.handleError = function (message) {
            window.console && console.log && console.log(message);
        };
        return Manager;
    }());
    AjaxSolr.Manager = Manager;
})(AjaxSolr || (AjaxSolr = {}));
var AjaxSolr;
(function (AjaxSolr) {
    "use strict";
    // export const defaultParameterStoreArgs: ParameterStoreAttributes = {
    //     exposed: [],
    //     params: {}
    // }
    /**
     * The ParameterStore, as its name suggests, stores Solr parameters. Widgets
     * expose some of these parameters to the user. Whenever the user changes the
     * values of these parameters, the state of the application changes. In order to
     * allow the user to move back and forth between these states with the browser's
     * Back and Forward buttons, and to bookmark these states, each state needs to
     * be stored. The easiest method is to store the exposed parameters in the URL
     * hash (see the <tt>ParameterHashStore</tt> class). However, you may implement
     * your own storage method by extending this class.
     *
     * <p>For a list of possible parameters, please consult the links below.</p>
     *
     * @see http://wiki.apache.org/solr/CoreQueryParameters
     * @see http://wiki.apache.org/solr/CommonQueryParameters
     * @see http://wiki.apache.org/solr/SimpleFacetParameters
     * @see http://wiki.apache.org/solr/HighlightingParameters
     * @see http://wiki.apache.org/solr/MoreLikeThis
     * @see http://wiki.apache.org/solr/SpellCheckComponent
     * @see http://wiki.apache.org/solr/StatsComponent
     * @see http://wiki.apache.org/solr/TermsComponent
     * @see http://wiki.apache.org/solr/TermVectorComponent
     * @see http://wiki.apache.org/solr/LocalParams
     *
     * @param properties A map of fields to set. Refer to the list of public fields.
     * @class ParameterStore
     */
    var ParameterStore = (function () {
        function ParameterStore(attributes) {
            this.params = {};
            AjaxSolr.extend(this, this, attributes);
        }
        /**
         * Some Solr parameters may be specified multiple times. It is easiest to
         * hard-code a list of such parameters. You may change the list by passing
         * <code>{ multiple: /pattern/ }</code> as an argument to the constructor of
         * this class or one of its children, e.g.:
         *
         * <p><code>new ParameterStore({ multiple: /pattern/ })</code>
         *
         * @param {String} name The name of the parameter.
         * @returns {Boolean} Whether the parameter may be specified multiple times.
         * @see http://lucene.apache.org/solr/api/org/apache/solr/handler/DisMaxRequestHandler.html
         */
        ParameterStore.prototype.isMultiple = function (name) {
            return name.match(/^(?:bf|bq|facet\.date|facet\.date\.other|facet\.date\.include|facet\.field|facet\.pivot|facet\.range|facet\.range\.other|facet\.range\.include|facet\.query|fq|group\.field|group\.func|group\.query|pf|qf)$/);
        };
        /**
         * Returns a parameter. If the parameter doesn't exist, creates it.
         *
         * @param {String} name The name of the parameter.
         * @returns {AjaxSolr.Parameter|AjaxSolr.Parameter[]} The parameter.
         */
        ParameterStore.prototype.get = function (name) {
            if (this.params[name] === undefined) {
                var param = new AjaxSolr.Parameter({ name: name });
                if (this.isMultiple(name)) {
                    this.params[name] = [param];
                }
                else {
                    this.params[name] = param;
                }
            }
            return this.params[name];
        };
        /**
         * If the parameter may be specified multiple times, returns the values of
         * all identically-named parameters. If the parameter may be specified only
         * once, returns the value of that parameter.
         *
         * @param {String} name The name of the parameter.
         * @returns {String[]|Number[]} The value(s) of the parameter.
         */
        ParameterStore.prototype.values = function (name) {
            if (this.params[name] !== undefined) {
                if (this.isMultiple(name)) {
                    var values = [];
                    for (var i = 0, l = this.params[name].length; i < l; i++) {
                        values.push(this.params[name][i].val());
                    }
                    return values;
                }
                else {
                    return [this.params[name].val()];
                }
            }
            return [];
        };
        /**
         * If the parameter may be specified multiple times, adds the given parameter
         * to the list of identically-named parameters, unless one already exists with
         * the same value. If it may be specified only once, replaces the parameter.
         *
         * @param {String} name The name of the parameter.
         * @param {AjaxSolr.Parameter} [param] The parameter.
         * @returns {AjaxSolr.Parameter|Boolean} The parameter, or false.
         */
        ParameterStore.prototype.add = function (name, param) {
            if (param === undefined) {
                param = new AjaxSolr.Parameter({ name: name });
            }
            if (this.isMultiple(name)) {
                if (this.params[name] === undefined) {
                    this.params[name] = [param];
                }
                else {
                    if (AjaxSolr.inArray(param.val(), this.values(name)) == -1) {
                        this.params[name].push(param);
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                this.params[name] = param;
            }
            return param;
        };
        /**
         * Deletes a parameter.
         *
         * @param {String} name The name of the parameter.
         * @param {Number} [index] The index of the parameter.
         */
        ParameterStore.prototype.remove = function (name, index) {
            if (index === undefined) {
                delete this.params[name];
            }
            else {
                this.params[name].splice(index, 1);
                if (this.params[name].length == 0) {
                    delete this.params[name];
                }
            }
        };
        /**
         * Finds all parameters with matching values.
         *
         * @param {String} name The name of the parameter.
         * @param {String|Number|String[]|Number[]|RegExp} value The value.
         * @returns {String|Number[]} The indices of the parameters found.
         */
        ParameterStore.prototype.find = function (name, value) {
            if (this.params[name] !== undefined) {
                if (this.isMultiple(name)) {
                    var indices = [];
                    for (var i = 0, l = this.params[name].length; i < l; i++) {
                        if (AjaxSolr.equals(this.params[name][i].val(), value)) {
                            indices.push(i);
                        }
                    }
                    return indices.length ? indices : false;
                }
                else {
                    if (AjaxSolr.equals(this.params[name].val(), value)) {
                        return name;
                    }
                }
            }
            return false;
        };
        /**
         * If the parameter may be specified multiple times, creates a parameter using
         * the given name and value, and adds it to the list of identically-named
         * parameters, unless one already exists with the same value. If it may be
         * specified only once, replaces the parameter.
         *
         * @param {String} name The name of the parameter.
         * @param {String|Number|String[]|Number[]} value The value.
         * @param {Object} [locals] The parameter's local parameters.
         * @returns {AjaxSolr.Parameter|Boolean} The parameter, or false.
         */
        ParameterStore.prototype.addByValue = function (name, value, locals) {
            if (locals === undefined) {
                locals = {};
            }
            if (this.isMultiple(name) && AjaxSolr.isArray(value)) {
                var ret = [];
                for (var i = 0, l = value.length; i < l; i++) {
                    ret.push(this.add(name, new AjaxSolr.Parameter({ name: name, value: value[i], locals: locals })));
                }
                return ret;
            }
            else {
                return this.add(name, new AjaxSolr.Parameter({ name: name, value: value, locals: locals }));
            }
        };
        /**
         * Deletes any parameter with a matching value.
         *
         * @param {String} name The name of the parameter.
         * @param {String|Number|String[]|Number[]|RegExp} value The value.
         * @returns {String|Number[]} The indices deleted.
         */
        ParameterStore.prototype.removeByValue = function (name, value) {
            var indices = this.find(name, value);
            if (indices) {
                if (AjaxSolr.isArray(indices)) {
                    for (var i = indices.length - 1; i >= 0; i--) {
                        this.remove(name, indices[i]);
                    }
                }
                else {
                    this.remove(indices);
                }
            }
            return indices;
        };
        /**
         * Returns the Solr parameters as a query string.
         *
         * <p>IE6 calls the default toString() if you write <tt>store.toString()
         * </tt>. So, we need to choose another name for toString().</p>
         */
        ParameterStore.prototype.string = function () {
            var params = [], string;
            for (var name in this.params) {
                if (this.isMultiple(name)) {
                    for (var i = 0, l = this.params[name].length; i < l; i++) {
                        string = this.params[name][i].string();
                        if (string) {
                            params.push(string);
                        }
                    }
                }
                else {
                    string = this.params[name].string();
                    if (string) {
                        params.push(string);
                    }
                }
            }
            return params.join('&');
        };
        /**
         * Parses a query string into Solr parameters.
         *
         * @param {String} str The string to parse.
         */
        ParameterStore.prototype.parseString = function (str) {
            var pairs = str.split('&');
            for (var i = 0, l = pairs.length; i < l; i++) {
                if (pairs[i]) {
                    var param = new AjaxSolr.Parameter();
                    param.parseString(pairs[i]);
                    this.add(param.name, param);
                }
            }
        };
        /**
         * Returns the exposed parameters as a query string.
         *
         * @returns {String} A string representation of the exposed parameters.
         */
        ParameterStore.prototype.exposedString = function () {
            var params = [], string;
            for (var i = 0, l = this.exposed.length; i < l; i++) {
                if (this.params[this.exposed[i]] !== undefined) {
                    if (this.isMultiple(this.exposed[i])) {
                        for (var j = 0, m = this.params[this.exposed[i]].length; j < m; j++) {
                            string = this.params[this.exposed[i]][j].string();
                            if (string) {
                                params.push(string);
                            }
                        }
                    }
                    else {
                        string = this.params[this.exposed[i]].string();
                        if (string) {
                            params.push(string);
                        }
                    }
                }
            }
            return params.join('&');
        };
        /**
         * Resets the values of the exposed parameters.
         */
        ParameterStore.prototype.exposedReset = function () {
            for (var i = 0, l = this.exposed.length; i < l; i++) {
                this.remove(this.exposed[i]);
            }
        };
        /**
         * Loads the values of exposed parameters from persistent storage. It is
         * necessary, in most cases, to reset the values of exposed parameters before
         * setting the parameters to the values in storage. This is to ensure that a
         * parameter whose name is not present in storage is properly reset.
         *
         * @param {Boolean} [reset=true] Whether to reset the exposed parameters.
         *   before loading new values from persistent storage. Default: true.
         */
        ParameterStore.prototype.load = function (reset) {
            if (reset === undefined) {
                reset = true;
            }
            if (reset) {
                this.exposedReset();
            }
            this.parseString(this.storedString());
        };
        /**
         * An abstract hook for child implementations.
         *
         * <p>Returns the string to parse from persistent storage.</p>
         *
         * @returns {String} The string from persistent storage.
         */
        ParameterStore.prototype.storedString = function () {
            return '';
        };
        return ParameterStore;
    }());
    AjaxSolr.ParameterStore = ParameterStore;
})(AjaxSolr || (AjaxSolr = {}));
var AjaxSolr;
(function (AjaxSolr) {
    AjaxSolr.defaultParameterArgs = {
        name: null,
        value: null,
        locals: {}
    };
    /**
     * Represents a Solr parameter.
     *
     * @param properties A map of fields to set. Refer to the list of public fields.
     * @class Parameter
     */
    var Parameter = (function () {
        function Parameter(attributes) {
            AjaxSolr.extend(this, this, attributes);
        }
        /**
         * Returns the value. If called with an argument, sets the value.
         *
         * @param {String|Number|String[]|Number[]} [value] The value to set.
         * @returns The value.
         */
        Parameter.prototype.val = function (value) {
            if (value === undefined) {
                return this.value;
            }
            else {
                this.value = value;
            }
        };
        /**
         * Returns the value of a local parameter. If called with a second argument,
         * sets the value of a local parameter.
         *
         * @param {String} name The name of the local parameter.
         * @param {String|Number|String[]|Number[]} [value] The value to set.
         * @returns The value.
         */
        Parameter.prototype.local = function (name, value) {
            if (value === undefined) {
                return this.locals[name];
            }
            else {
                this.locals[name] = value;
            }
        };
        /**
         * Deletes a local parameter.
         *
         * @param {String} name The name of the local parameter.
         */
        Parameter.prototype.remove = function (name) {
            delete this.locals[name];
        };
        /**
         * Returns the Solr parameter as a query string key-value pair.
         *
         * <p>IE6 calls the default toString() if you write <tt>store.toString()
         * </tt>. So, we need to choose another name for toString().</p>
         */
        Parameter.prototype.string = function () {
            var pairs = [];
            for (var name in this.locals) {
                if (this.locals[name]) {
                    pairs.push(name + '=' + encodeURIComponent(this.locals[name]));
                }
            }
            var prefix = pairs.length ? '{!' + pairs.join('%20') + '}' : '';
            if (this.value || this.value == 0) {
                return this.name + '=' + prefix + this.valueString(this.value);
            }
            else if (this.name == 'q' && prefix) {
                return 'q.alt=' + prefix + encodeURIComponent('*:*');
            }
            else {
                return '';
            }
        };
        /**
         * Parses a string formed by calling string().
         *
         * @param {String} str The string to parse.
         */
        Parameter.prototype.parseString = function (str) {
            var param = str.match(/^([^=]+)=(?:\{!([^\}]*)\})?(.*)$/);
            if (param) {
                var matches;
                while (matches = /([^\s=]+)=(\S*)/g.exec(decodeURIComponent(param[2]))) {
                    this.locals[matches[1]] = decodeURIComponent(matches[2]);
                    param[2] = param[2].replace(matches[0], ''); // Safari's exec seems not to do this on its own
                }
                if (param[1] == 'q.alt') {
                    this.name = 'q';
                    // if q.alt is present, assume it is because q was empty, as above
                }
                else {
                    this.name = param[1];
                    this.value = this.parseValueString(param[3]);
                }
            }
        };
        /**
         * Returns the value as a URL-encoded string.
         *
         * @private
         * @param {String|Number|String[]|Number[]} value The value.
         * @returns {String} The URL-encoded string.
         */
        Parameter.prototype.valueString = function (value) {
            value = AjaxSolr.isArray(value) ? value.join(',') : value;
            return encodeURIComponent(value);
        };
        /**
         * Parses a URL-encoded string to return the value.
         *
         * @private
         * @param {String} str The URL-encoded string.
         * @returns {Array} The value.
         */
        Parameter.prototype.parseValueString = function (str) {
            str = decodeURIComponent(str);
            return str.indexOf(',') == -1 ? str : str.split(',');
        };
        return Parameter;
    }());
    AjaxSolr.Parameter = Parameter;
})(AjaxSolr || (AjaxSolr = {}));
/// <reference path="../core/core.ts" />
/// <reference path="../core/manager.ts" />
/// <reference path="../core/store.ts" />
/// <reference path="../core/parameter.ts" />
var PDBe;
(function (PDBe) {
    var SolrApp;
    (function (SolrApp) {
        function escapeValue(value) {
            // If the field value has a space, colon, quotation mark or forward slash
            // in it, wrap it in quotes, unless it is a range query or it is already 
            // wrapped in quotes.
            if (window.location.href.indexOf("text:") < 0) {
                if (value.match(/[ :\/"]/) && !value.match(/[\[\{]\S+ TO \S+[\]\}]/) && !value.match(/^["\(].*["\)]$/)) {
                    return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
                }
            }
            else {
                // else if it is a text search, don't put quotes around the search term when there is a space
                if (value.match(/[:\/"]/) && !value.match(/[\[\{]\S+ TO \S+[\]\}]/) && !value.match(/^["\(].*["\)]$/)) {
                    return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
                }
            }
            return value;
        }
        SolrApp.escapeValue = escapeValue;
        SolrApp.appManagers = AjaxSolr.createManagerStore(PDBe.SolrApp.managerConfig);
        //console.log(appManagers);
    })(SolrApp = PDBe.SolrApp || (PDBe.SolrApp = {}));
})(PDBe || (PDBe = {}));
