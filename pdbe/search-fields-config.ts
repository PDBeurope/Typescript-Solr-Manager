namespace PDBe.SolrApp {

    export const searchFieldsConfig = [
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
        },{
            categoryLabel: 'IDs',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'BMRB ID',
                   groupFields: [{
                       label: 'BMRB ID',
                       name: ['bmrb_id'],
                       type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'EMBD ID',
                   groupFields: [{
                       label: 'EMBD ID',
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
                   groupLabel: 'Interacting entity ID',
                   groupFields: [{
                       label: 'Interacting entity ID',
                       name: ['interacting_entity_id'],
                       type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Interacting entry ID',
                   groupFields: [{
                       label: 'Interacting entry ID',
                       name: ['interacting_entry_id'],
                       type: 'string',
                       selectedValue: undefined
                   }]
                },
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
                   groupLabel: 'PDB ID',
                   groupFields: [{
                       label: 'PDB ID',
                       name: ['pdb_id'],
                       type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Prefered assembly ID',
                   groupFields: [{
                       label: 'Prefered assembly ID',
                       name: ['prefered_assembly_id'],
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
            categoryLabel: 'Fasta / Phmmer Sequence',
            categoryActive: false,
            categoryFields: [
                {
                   groupLabel: 'FASTA Sequence',
                   groupFields: [{
                        label: 'FASTA Sequence',
                        name: ['xjoin_fasta=true&bf=fasta(percentIdentity)&xjoin_fasta.external.sequence'],
                        type: 'largeString',
                        dataType: 'fastaSequence',
                        fqValue: '{!xjoin}xjoin_fasta',
                        selectedValue: undefined,
                        appendValueToParams: true,
                        appendValueToFq: false
                   }]
                },
                {
                   groupLabel: 'Phmmer Sequence',
                   groupFields: [{
                        label: 'Phmmer Sequence',
                        name: ['xjoin_phmmer.fl=*&xjoin_phmmer.fl=*&xjoin_phmmer=true&xjoin_phmmer.external.sequence'],
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
            categoryLabel: 'Structural Genomics Center',
            categoryActive: true,
            categoryFields: [
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
                }
            ]
        },
        {
            categoryLabel: 'Molecules',
            categoryActive: true,
            categoryFields: [
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
                   groupLabel: 'All Molecule Name',
                   groupFields: [{
                        label: 'All Molecule Name',
                        name: ['all_molecule_names'],
                        type: 'string',
                        autocompleteField: 'all_molecule_names',
                        selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Molecule sequence',
                   groupFields: [{
                        label: 'Molecule sequence',
                        name: ['molecule_sequence'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Molecule synonym',
                   groupFields: [{
                        label: 'Molecule synonym',
                        name: ['molecule_synonym'],
                        type: 'string',
                        autocompleteField: 'molecule_synonym',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Molecule type',
                   groupFields: [{
                        label: 'Molecule type',
                        name: ['molecule_type'],
                        type: 'string',
                        value: ["Protein","DNA","RNA","DNA/RNA hybrid","D-Protein","Polysaccharide(D)"],
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
                   groupLabel: 'ID',
                   groupFields: [{
                        label: 'ID',
                        name: ['assembly_id'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Type',
                   groupFields: [{
                        label: 'Type',
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
            categoryLabel: 'ATCC',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'ATCC ID',
                   groupFields: [{
                        label: 'ATCC ID',
                        name: ['atcc'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Beam source',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Beam source name / type',
                   groupFields: [
                        {
                            label: 'Source name',
                            name: ['beam_source_name'],
                            type: 'string',
                            value: ["Synchrotron","Rotating anode","Sealed tube","Free-electron laser","Neutron source",
                                "Electron microscope","TRANSMISSION ELECTRON MICROSCOPE","NEUTRON SPALLATION SOURCE",
                                "Bruker","Copper","FRM II","In-house source","Compact light source",
                                "FRM-II NUCLEAR REACTOR","IMAGINE CG4D HFIR","LCLS","MLZ","MaruX home source",
                                "NUCLEAR REACTOR (INSTITUT LAUE LAN","Other","SEALED X-RAY TUBE","SNS","SNS/ORNL",
                                "SPALLATION"],
                            selectedValue: undefined
                        },
                        {
                            label: 'Source type',
                            name: ['beam_source_type'],
                            type: 'string',
                            selectedValue: undefined
                        }
                    ]
                   
                   
                }
            ]
        },
        {
            categoryLabel: 'Biological',
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
            categoryLabel: 'CATH',
            categoryActive: true,
            categoryFields: [
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
                        value: ["Alpha Beta","Mainly Beta","Mainly Alpha","Few Secondary Structures"],
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
            categoryLabel: 'Cell',
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
                        value: ['y','n'],
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Citation',
            categoryActive: true,
            categoryFields: [
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
                   groupLabel: 'Year',
                   groupFields: [{
                        label: 'Year',
                        name: ['citation_year'],
                        type: 'int',
                        validation: 'numberOnly',
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
                   groupLabel: 'Compound weight',
                   groupFields: [{
                        label: 'Compound weight',
                        name: ['compound_weight'],
                        type: 'float',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Crystallisation ph/ reservoir',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'ph',
                   groupFields: [{
                        label: 'ph',
                        name: ['crystallisation_ph'],
                        type: 'float',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Reservoir',
                   groupFields: [{
                        label: 'Reservoir',
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
                   groupLabel: 'Deposition site',
                   groupFields: [{
                        label: 'Deposition site',
                        name: ['deposition_site'],
                        type: 'string',
                        value: ["RCSB","PDBE","PDBJ","BMRB","BNL","EBI","OSAKA","NDB","PDB"],
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
            categoryLabel: 'EC hierarchy name/ number',
            categoryActive: true,
            categoryFields: [
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
            categoryLabel: 'Entity',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Entity Id',
                   groupFields: [{
                        label: 'Entity Id',
                        name: ['entity_id'],
                        type: 'int',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Entity weight',
                   groupFields: [{
                        label: 'Entity weight',
                        name: ['entity_weight'],
                        type: 'float',
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
            categoryLabel: 'Organism scientific name',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Organism scientific name',
                   groupFields: [{
                        label: 'Organism scientific name',
                        name: ['entry_organism_scientific_name'],
                        type: 'string',
                        autocompleteField: 'entry_organism_scientific_name',
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
                        value: ['y','n'],
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Experimental method',
                   groupFields: [{
                        label: 'Experimental method',
                        name: ['experimental_method'],
                        type: 'string',
                        value: ["X-ray diffraction","Electron Microscopy","Solution NMR","Neutron Diffraction",
                            "Solid-state NMR","Hybrid","X-ray solution scattering","Theoretical Model",
                            "Electron crystallography","Fiber diffraction","X-ray powder diffraction",
                            "X-RAY DIFFRACTION, NEUTRON DIFFRACTION","EPR","Infrared spectroscopy",
                            "Fluorescence transfer","NEUTRON DIFFRACTION, X-RAY DIFFRACTION",
                            "NMR, 20 STRUCTURES.NMR","Other"],
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
                },
                {
                   groupLabel: 'Tax id',
                   groupFields: [{
                        label: 'Tax id',
                        name: ['tax_id'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Gene name',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Gene name',
                   groupFields: [{
                        label: 'Gene name',
                        name: ['gene_name'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Genus',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Genus',
                   groupFields: [{
                        label: 'Genus',
                        name: ['genus'],
                        type: 'string',
                        autocompleteField: 'genus',
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
            categoryLabel: 'Interpro accession/ name',
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
                }
            ]
        },
        {
            categoryLabel: 'Journal',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Journal',
                   groupFields: [{
                        label: 'Journal',
                        name: ['journal'],
                        type: 'string',
                        autocompleteField: 'journal',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Journal first page',
                   groupFields: [{
                        label: 'Journal first page',
                        name: ['journal_first_page'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Journal last page',
                   groupFields: [{
                        label: 'Journal last page',
                        name: ['journal_last_page'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Journal page',
                   groupFields: [{
                        label: 'Journal page',
                        name: ['journal_page'],
                        type: 'string',
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
            categoryLabel: 'Model quality',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Model quality',
                   groupFields: [{
                        label: 'Model quality',
                        name: ['model_quality'],
                        type: 'float',
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
            categoryLabel: 'conf features',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'conf features',
                   groupFields: [{
                        label: 'conf features',
                        name: ['na_conf_features'],
                        type: 'string',
                        value: ["double helix","a-form double helix","mismatched base pair","hairpin loop",
                            "bulge loop","internal loop","triple helix","three-way junction","four-way junction",
                            "tetraloop","quadruple helix","parallel strands","b-form double helix",
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
            categoryLabel: 'Overall quality',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Overall quality',
                   groupFields: [{
                        label: 'Overall quality',
                        name: ['overall_quality'],
                        type: 'float',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'pfam accession/ name/ description',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'pfam accession',
                   groupFields: [{
                        label: 'pfam accession',
                        name: ['pfam_accession'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'pfam name',
                   groupFields: [{
                        label: 'pfam name',
                        name: ['pfam_clan_name'],
                        type: 'string',
                        autocompleteField: 'pfam_clan_name',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'pfam description',
                   groupFields: [{
                        label: 'pfam description',
                        name: ['pfam_description'],
                        type: 'string',
                        autocompleteField: 'pfam_description',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'pfam name',
                   groupFields: [{
                        label: 'pfam name',
                        name: ['pfam_name'],
                        type: 'string',
                        autocompleteField: 'pfam_name',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Phasing method',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Phasing method',
                   groupFields: [{
                        label: 'Phasing method',
                        name: ['phasing_method'],
                        type: 'string',
                        value: ["MR","MAD","SAD","mr","SIRAS","MIRAS","MIR","sad","ML","SIR","mad","MAD+MR",
                            "MAD/MR","SAD+MR","AB_INITIO","M.R.","MR+MAD","MR+SAD","MR/MAD","NONE"],
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
                        value: ["Peptide-like","Oligopeptide","Cyclic peptide","Polypeptide","Glycopeptide",
                            "Cyclic depsipeptide","Thiopeptide","Peptaibol","Cyclic lipopeptide","Lipopeptide",
                            "Chalkophore, Polypeptide","Lipoglycopeptide","Macrolide","peptide-like"],
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
                        value: ["RCSB","PDBE","PDBJ","OSAKA","EBI","NDB","PDB","BNL","PRAGUE"],
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Pubmed id/ authors',
            categoryActive: true,
            categoryFields: [
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
                },
                {
                   groupLabel: 'Pubmed author list',
                   groupFields: [{
                        label: 'Pubmed author list',
                        name: ['pubmed_author_list'],
                        type: 'string',
                        autocompleteField: 'pubmed_author_list',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Rank',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Rank',
                   groupFields: [{
                        label: 'Rank',
                        name: ['rank'],
                        type: 'string',
                        value: ["species","superkingdom","genus","family","phylum","order","class",
                            "kingdom","subfamily"],
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Refinement software',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Refinement software',
                   groupFields: [{
                        label: 'Refinement software',
                        name: ['refinement_software'],
                        type: 'string',
                        autocompleteField: 'refinement_software',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Release date',
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
                }
            ]
        },
        {
            categoryLabel: 'Release year',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Release year',
                   groupFields: [{
                        label: 'Release year',
                        name: ['release_year'],
                        type: 'int',
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
            categoryLabel: 'Revision date',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'Revision date',
                   groupFields: [{
                        label: 'Revision date',
                        name: ['revision'],
                        type: 'date',
                        format: 'YYYY-MM-DDThh:mm:ssZ',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Revision year',
            categoryActive: true,
            categoryFields: [
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
                        value: ["Engineered","Natural","Synthetic"],
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'SCOP family/ fold',
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
                        value: ["REL","WDRN","HPUB","OBS","AUTH","PROC","HOLD","REPL","POLC","WAIT","AUCO","REFI"],
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'struct_asym_id',
            categoryActive: true,
            categoryFields: [
                {
                   groupLabel: 'struct_asym_id',
                   groupFields: [{
                        label: 'struct_asym_id',
                        name: ['struct_asym_id'],
                        type: 'string',
                       selectedValue: undefined
                   }]
                }
            ]
        },
        {
            categoryLabel: 'Structure determination method',
            categoryActive: true,
            categoryFields: [
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
            categoryLabel: 'Structure solution software',
            categoryActive: true,
            categoryFields: [
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
            categoryLabel: 'Uniprot accession/ coverage/ features',
            categoryActive: true,
            categoryFields: [
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
                   groupLabel: 'Uniprot coverage',
                   groupFields: [{
                        label: 'Uniprot coverage',
                        name: ['uniprot_coverage'],
                        type: 'float',
                       selectedValue: undefined
                   }]
                },
                {
                   groupLabel: 'Uniprot features',
                   groupFields: [{
                        label: 'Uniprot features',
                        name: ['uniprot_features'],
                        type: 'string',
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
    }


    ]

}