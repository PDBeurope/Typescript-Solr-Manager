namespace PDBe.SolrApp {

    export const managerConfig: AjaxSolr.managerConfigBase[] = [
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.field': 
                    [ 
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
                'facet.range':['deposition_year'],
                'f.deposition_year.facet.range.start':'1970',
                'f.deposition_year.facet.range.end':'2050',
                'f.deposition_year.facet.range.gap':'5',
                'f.deposition_year.facet.range.other' : 'between',
                'f.deposition_year.facet.range.include' : 'upper',
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
                'facet.range':['release_year'],
                'f.release_year.facet.range.start':'1970',
                'f.release_year.facet.range.end':'2050',
                'f.release_year.facet.range.gap':'5',
                'f.release_year.facet.range.other' : 'between',
                'f.release_year.facet.range.include' : 'upper',
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
                'facet.range':['resolution'],
                'f.resolution.facet.range.start':'0.0',
                'f.resolution.facet.range.end':'100',
                'f.resolution.facet.range.gap':'0.5',
                'f.resolution.facet.range.other' : 'between',
                'f.resolution.facet.range.include' : 'upper',
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
                'rows':100,
                'json.nl': 'map',
                'fl': 
                [
                    'pdb_id','citation_title','citation_authors','title','experimental_method','entry_authors','pubmed_id','citation_year','journal','organism_scientific_name','assembly_composition','interacting_ligands','tax_id','resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name', 'data_quality', 'model_quality', 'experiment_data_available', 'deposition_date', 'release_year'
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
                'facet.limit': 20000, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'facet.limit': 20000, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'fl': 
                [
                    'pdb_id','citation_title','citation_authors','title','experimental_method','entry_authors','pubmed_id','citation_year','journal','organism_scientific_name','assembly_composition','interacting_ligands','tax_id','resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name', 'pfam_accession', 'data_quality', 'model_quality', 'experiment_data_available', 'deposition_date', 'release_year'
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
                'facet.limit': 20000, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'facet.limit': 20000, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'facet.limit': -1, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'facet.limit': 20000, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
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
                'fl': 
                [
                    'pdb_id','data_quality','model_quality','experiment_data_available'
                ]
            }
        }
    ]

};

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