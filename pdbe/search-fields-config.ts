namespace PDBe.SolrApp {

    export const searchFieldsConfig = {

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
        interacting_entity_id: {
            label: 'Interacting entity ID',
            name: ['interacting_entity_id'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        interacting_entry_id: {
            label: 'Interacting entry ID',
            name: ['interacting_entry_id'],
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
        prefered_assembly_id: {
            label: 'Prefered assembly ID',
            name: ['prefered_assembly_id'],
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
            label: 'FASTA Sequence',
            name: ['xjoin_fasta=true&bf=fasta(percentIdentity)&xjoin_fasta.external.sequence'],
            type: 'largeString', relation: 'Equal to', condition: 'OR',
            dataType: 'fastaSequence',
            fqValue: '{!xjoin}xjoin_fasta',
            selectedValue: undefined,
            appendValueToParams: true,
            appendValueToFq: false
        },
        phmmer_sequence: {
            label: 'Phmmer Sequence',
            name: ['xjoin_phmmer.fl=*&xjoin_phmmer.fl=*&xjoin_phmmer=true&xjoin_phmmer.external.sequence'],
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
        molecule_name: {
            label: 'Molecule Name',
            name: ['molecule_name'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'molecule_name',
            selectedValue: undefined
        },
        all_molecule_names: {
            label: 'All Molecule Name',
            name: ['all_molecule_names'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'all_molecule_names',
            selectedValue: undefined
        },
        molecule_sequence: {
            label: 'Molecule sequence',
            name: ['molecule_sequence'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        molecule_synonym: {
            label: 'Molecule synonym',
            name: ['molecule_synonym'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'molecule_synonym',
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
            autocompleteField: 'assembly_composition',
            selectedValue: undefined
        },
        assembly_form: {
            label: 'Form',
            name: ['assembly_form'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            value: ['homo', 'hetero'],
            selectedValue: undefined
        },
        assembly_id: {
            label: 'ID',
            name: ['assembly_id'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        assembly_type: {
            label: 'Type',
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
            label: 'Source name',
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
            label: 'Source type',
            name: ['beam_source_type'],
            type: 'string', relation: 'Equal to', condition: 'OR',
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
            label: 'Year',
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
            label: 'ph',
            name: ['crystallisation_ph'],
            type: 'float', relation: '=', condition: 'OR',
            selectedValue: undefined
        },
        crystallisation_reservoir: {
            label: 'Reservoir',
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
            label: 'Entity weight',
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
        entry_organism_scientific_name: {
            label: 'Organism scientific name',
            name: ['entry_organism_scientific_name'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'entry_organism_scientific_name',
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
        tax_id: {
            label: 'Tax id',
            name: ['tax_id'],
            type: 'string', relation: 'Equal to', condition: 'OR',
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
            label: 'Journal',
            name: ['journal'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'journal',
            selectedValue: undefined
        },
        journal_first_page: {
            label: 'Journal first page',
            name: ['journal_first_page'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        journal_last_page: {
            label: 'Journal last page',
            name: ['journal_last_page'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        journal_page: {
            label: 'Journal page',
            name: ['journal_page'],
            type: 'string', relation: 'Equal to', condition: 'OR',
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
        model_quality: {
            label: 'Model quality',
            name: ['model_quality'],
            type: 'float', relation: '=', condition: 'OR',
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
            label: 'conf features',
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
        overall_quality: {
            label: 'Overall quality',
            name: ['overall_quality'],
            type: 'float', relation: '=', condition: 'OR',
            selectedValue: undefined
        },
        pfam_accession: {
            label: 'pfam accession',
            name: ['pfam_accession'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        pfam_clan_name: {
            label: 'pfam name',
            name: ['pfam_clan_name'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'pfam_clan_name',
            selectedValue: undefined
        },
        pfam_description: {
            label: 'pfam description',
            name: ['pfam_description'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'pfam_description',
            selectedValue: undefined
        },
        pfam_name: {
            label: 'pfam name',
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
        pubmed_author_list: {
            label: 'Pubmed author list',
            name: ['pubmed_author_list'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            autocompleteField: 'pubmed_author_list',
            selectedValue: undefined
        },
        rank: {
            label: 'Rank',
            name: ['rank'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            value: ["species", "superkingdom", "genus", "family", "phylum", "order", "class",
                "kingdom", "subfamily"],
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
        revision: {
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
            selectedValue: undefined
        },
        status: {
            label: 'Entry status',
            name: ['status'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            value: ["REL", "WDRN", "HPUB", "OBS", "AUTH", "PROC", "HOLD", "REPL", "POLC", "WAIT", "AUCO", "REFI"],
            selectedValue: undefined
        },
        struct_asym_id: {
            label: 'struct_asym_id',
            name: ['struct_asym_id'],
            type: 'string', relation: 'Equal to', condition: 'OR',
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
        uniprot_coverage: {
            label: 'Uniprot coverage',
            name: ['uniprot_coverage'],
            type: 'float', relation: '=', condition: 'OR',
            selectedValue: undefined
        },
        uniprot_features: {
            label: 'Uniprot features',
            name: ['uniprot_features'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        },
        uniprot_id: {
            label: 'Uniprot id',
            name: ['uniprot_id'],
            type: 'string', relation: 'Equal to', condition: 'OR',
            selectedValue: undefined
        }

    }

}