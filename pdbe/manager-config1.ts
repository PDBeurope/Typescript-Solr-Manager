namespace PDBe.SolrApp {

    export const managerConfig: AjaxSolr.managerConfigBase[] = [
        {
            managerDetails: {
                solrUrl: {
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                'f.resolution.facet.range.include' : 'upper'
            }
        },
        {
            managerDetails: {
                solrUrl: {
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    'pdb_id','citation_title','citation_authors','title','experimental_method','entry_authors','pubmed_id','citation_year','journal','organism_scientific_name','assembly_composition','interacting_ligands','tax_id','resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name'
                ]
            }
        },
        {
            managerDetails: {
                solrUrl: {
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
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
                    'pdb_id','citation_title','citation_authors','title','experimental_method','entry_authors','pubmed_id','citation_year','journal','organism_scientific_name','assembly_composition','interacting_ligands','tax_id','resolution', 'status', 'release_date', 'prefered_assembly_id', 'entry_author_list', 'entry_organism_scientific_name', 'pfam_accession'
                ]
            }
        },
        {
            managerDetails: {
                solrUrl: {
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                'facet.limit': 10, // how many to fetch
                'facet.mincount': 1, // to only return a facet if it has a hit
                'json.nl': 'map',
                'fq':'status:REL'
            }
        },
        {
            managerDetails: {
                solrUrl: {
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/latest/'
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
                    normal: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/',
                    latest: '//wwwdev.ebi.ac.uk/pdbe/search/pdb/'
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