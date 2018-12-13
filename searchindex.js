Search.setIndex({docnames:["index","interpret","overview/cli","overview/faq","overview/installation","overview/overview","overview/tutorials","predict","predict.predict_handlers","samplers","samplers.file_samplers","selene","sequences","targets","tutorials/index","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["index.rst","interpret.rst","overview/cli.md","overview/faq.md","overview/installation.md","overview/overview.md","overview/tutorials.md","predict.rst","predict.predict_handlers.rst","samplers.rst","samplers.file_samplers.rst","selene.rst","sequences.rst","targets.rst","tutorials/index.rst","utils.rst"],objects:{"":{selene_sdk:[11,0,0,"-"]},"selene_sdk.EvaluateModel":{evaluate:[11,2,1,""]},"selene_sdk.TrainModel":{create_test_set:[11,2,1,""],evaluate:[11,2,1,""],train:[11,2,1,""],train_and_validate:[11,2,1,""],validate:[11,2,1,""]},"selene_sdk.interpret":{ISMResult:[1,1,1,""],heatmap:[1,5,1,""],load_variant_abs_diff_scores:[1,5,1,""],ordered_variants_and_indices:[1,5,1,""],rescale_score_matrix:[1,5,1,""],sequence_logo:[1,5,1,""],sort_standard_chrs:[1,5,1,""],variant_diffs_scatter_plot:[1,5,1,""]},"selene_sdk.interpret.ISMResult":{from_file:[1,3,1,""],get_score_matrix_for:[1,2,1,""],reference_sequence:[1,4,1,""],sequence_type:[1,4,1,""]},"selene_sdk.predict":{AnalyzeSequences:[7,1,1,""],predict_handlers:[8,0,0,"-"]},"selene_sdk.predict.AnalyzeSequences":{get_predictions_for_fasta_file:[7,2,1,""],in_silico_mutagenesis:[7,2,1,""],in_silico_mutagenesis_from_file:[7,2,1,""],in_silico_mutagenesis_predict:[7,2,1,""],predict:[7,2,1,""],variant_effect_prediction:[7,2,1,""]},"selene_sdk.predict.predict_handlers":{DiffScoreHandler:[8,1,1,""],LogitScoreHandler:[8,1,1,""],PredictionsHandler:[8,1,1,""],WritePredictionsHandler:[8,1,1,""],WriteRefAltHandler:[8,1,1,""],write_to_file:[8,5,1,""]},"selene_sdk.predict.predict_handlers.DiffScoreHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.LogitScoreHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.PredictionsHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.WritePredictionsHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.WriteRefAltHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.samplers":{IntervalsSampler:[9,1,1,""],MultiFileSampler:[9,1,1,""],OnlineSampler:[9,1,1,""],RandomPositionsSampler:[9,1,1,""],Sampler:[9,1,1,""],file_samplers:[10,0,0,"-"]},"selene_sdk.samplers.IntervalsSampler":{sample:[9,2,1,""]},"selene_sdk.samplers.MultiFileSampler":{get_data_and_targets:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],sample:[9,2,1,""],save_dataset_to_file:[9,2,1,""],set_mode:[9,2,1,""]},"selene_sdk.samplers.OnlineSampler":{STRAND_SIDES:[9,4,1,""],get_data_and_targets:[9,2,1,""],get_dataset_in_batches:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_sequence_from_encoding:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],save_dataset_to_file:[9,2,1,""]},"selene_sdk.samplers.RandomPositionsSampler":{sample:[9,2,1,""]},"selene_sdk.samplers.Sampler":{BASE_MODES:[9,4,1,""],get_data_and_targets:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],sample:[9,2,1,""],save_dataset_to_file:[9,2,1,""],set_mode:[9,2,1,""]},"selene_sdk.samplers.file_samplers":{BedFileSampler:[10,1,1,""],MatFileSampler:[10,1,1,""]},"selene_sdk.samplers.file_samplers.BedFileSampler":{get_data:[10,2,1,""],get_data_and_targets:[10,2,1,""],sample:[10,2,1,""]},"selene_sdk.samplers.file_samplers.MatFileSampler":{get_data:[10,2,1,""],get_data_and_targets:[10,2,1,""],sample:[10,2,1,""]},"selene_sdk.sequences":{Genome:[12,1,1,""],Proteome:[12,1,1,""],Sequence:[12,1,1,""],encoding_to_sequence:[12,5,1,""],get_reverse_encoding:[12,5,1,""],sequence_to_encoding:[12,5,1,""]},"selene_sdk.sequences.Genome":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],COMPLEMENTARY_BASE_DICT:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_chr_lens:[12,2,1,""],get_chrs:[12,2,1,""],get_encoding_from_coords:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.sequences.Proteome":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_encoding_from_coords:[12,2,1,""],get_prot_lens:[12,2,1,""],get_prots:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.sequences.Sequence":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_encoding_from_coords:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.targets":{GenomicFeatures:[13,1,1,""],Target:[13,1,1,""]},"selene_sdk.targets.GenomicFeatures":{get_feature_data:[13,2,1,""],is_positive:[13,2,1,""]},"selene_sdk.targets.Target":{get_feature_data:[13,2,1,""]},"selene_sdk.utils":{NonStrandSpecific:[15,1,1,""],PerformanceMetrics:[15,1,1,""],execute:[15,5,1,""],get_indices_and_probabilities:[15,5,1,""],initialize_logger:[15,5,1,""],initialize_model:[15,5,1,""],instantiate:[15,5,1,""],load_features_list:[15,5,1,""],load_model_from_state_dict:[15,5,1,""],load_path:[15,5,1,""],parse_configs_and_run:[15,5,1,""],visualize_precision_recall_curves:[15,5,1,""],visualize_roc_curves:[15,5,1,""]},"selene_sdk.utils.PerformanceMetrics":{add_metric:[15,2,1,""],remove_metric:[15,2,1,""],update:[15,2,1,""],visualize:[15,2,1,""],write_feature_scores_to_file:[15,2,1,""]},selene_sdk:{EvaluateModel:[11,1,1,""],TrainModel:[11,1,1,""],interpret:[1,0,0,"-"],predict:[7,0,0,"-"],samplers:[9,0,0,"-"],sequences:[12,0,0,"-"],targets:[13,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function","6":"py:classmethod"},terms:{"abstract":[8,12,13],"boolean":12,"case":[2,3,5],"catch":[5,13],"char":12,"class":[1,3,5,7,8,9,10,11,12,13,15],"default":[1,2,7,8,9,10,11,12,13,15],"final":[2,11],"float":[1,2,9,11,13,15],"function":[0,1,2,3,7,9,11,13,15],"int":[1,7,9,10,11,12,13,15],"new":[1,2,3,5,9,11],"return":[1,2,7,8,9,10,11,12,13,15],"static":[1,2],"true":[1,2,7,8,9,10,11,12,13,15],"try":15,"while":[2,5],Axes:1,For:[1,2,3,5,8,9,12,13],GBs:[2,15],NOT:[2,7],One:[2,12,13],POS:[2,7],That:[2,7,11],The:[0,1,2,3,4,6,7,8,9,10,11,12,13,15],There:[2,5],These:[2,5,9,13],Use:[2,11],Used:[8,9,11],Useful:2,Will:[7,15],With:2,__init__:2,_in:14,_io:8,_loss:[2,11,15],_preprocess:15,_proxi:15,_selene_:15,abl:[2,5,8],about:2,abov:[1,2,13],abs_diff:[2,7],absdiffscorehandl:7,absenc:[2,10],absent:13,absolut:[1,2,5,7],accept:[2,13,15],access:[3,12,13],accord:5,account:[2,10,15],accumul:8,acid:[2,5,12],across:[1,2,5,8,15],activ:4,actual:[1,2,15],adapt:2,add:15,add_metr:15,addit:[0,9,13,15],addition:2,adher:5,adjust:2,aforement:5,after:[2,5,11],again:9,against:3,ahead:[2,15],aim:9,all:[1,2,5,7,8,9,10,11,12,13,15],allel:2,allevi:9,allot:[2,15],allow:[1,2,5,9],along:2,alongsid:2,alpha:1,alphabet:[1,2,5,7,9,10,12],alreadi:[2,4,7,10,15],also:[2,3,4,5,9,11,12],alt:[1,2,7,8],alt_writ:8,altern:[1,2,8],alwai:2,amino:[2,5,12],analysi:[2,7],analyz:[7,14,15],analyze_sequ:2,analyzesequ:[2,5],ani:[1,2,9,11,13,15],annot:[1,9,13],anshul:2,api:2,appear:[1,15],append:2,appli:[1,2,5,7,13],applic:[2,7],appropri:[2,11,15],architectur:[7,10,11,15],area:[5,12],arg1:2,arg2:2,arg:[8,12,13,15],argument:[1,2,11,15],around:[5,12],arrai:[1,9,12,13],arraylik:8,ask:2,assign:[2,12,13],associ:[1,2,15],assum:[2,9,10,13,15],asynchron:3,atcgataaaattctggag:2,attach:8,attent:2,auc:[2,5,11],auc_list:11,aupr:11,auprc:[2,5],auto_open:1,autom:3,automat:[1,2,3,5,7,9,11,15],avail:[2,7,11,15],averag:[11,15],average_precis:[2,11,15],average_precision_scor:[2,11,15],avoid:11,axes:1,axi:[1,2,10],backward:2,bar:1,base:[0,1,2,3,5,7,8,9,10,11,12,13,15],base_mod:9,base_pr:7,base_predict:8,base_sc:1,base_to_index:12,baselin:8,baseline_predict:8,bases_arr:12,batch:[2,7,8,9,10,11],batch_id:8,batch_predict:8,batch_sequ:7,batch_siz:[2,7,9,10,11],becaus:[2,5,8,9,11,15],bed:[5,9,10,13,15],bedfilesampl:[2,5],been:[2,7,9,11,13,15],befor:[2,4,9,10,11],begin:[2,15],behavior:12,being:[2,3,11,13],below:[1,2],best:[2,11],best_model:[2,11],better:11,between:[1,2,7,8,9],beyond:2,bgzip:13,bias:3,bin:9,bin_radiu:9,binari:[2,13],bind:[1,15],bioconda:4,biolog:[2,5,12],blacklist:[2,12],blacklist_region:[2,12],bool:[1,7,8,9,10,11,12,13,15],both:[2,5,9,15],bottom:[1,15],bound:12,breakdown:[2,5],briefli:5,browser:1,build:[2,4],build_ext:4,built:3,calcul:[8,15],call:[2,3,5,9,11,12,15],can:[1,2,3,4,5,8,9,11,12,15],cannot:[7,15],care:2,carri:[2,15],cbar:1,cbar_kw:1,center:[2,9],center_bin_to_predict:[2,9],certain:1,certainli:2,chang:[1,2,15],charact:[1,9,12],characterist:5,check:[2,10,12,14],checkpoint:[2,11],checkpoint_resum:[2,11],choic:12,chosen:3,chr1:12,chr6:[2,9],chr7:[2,9],chr8:[2,9],chr9:[2,9],chr:[2,12],chrom:[1,2,7,12,13],chromosom:[1,2,5,12],chrx:9,chry:9,clarifi:13,class_arg:2,classmethod:12,cli:[0,3,5],clone:4,close:[8,15],close_filehandl:9,closest:1,clutter:5,cmap:1,code:[1,2,5],collect:[7,8,12,15],color:1,color_palett:1,color_schem:1,colorbar:1,colorblind:15,column:[1,2,7,8,9,10,11,12,13],com:4,comet:3,comma:[1,2],command:[2,3,4,5],commit:4,common:2,compar:3,compat:3,complement:15,complementari:12,complementary_base_dict:12,complet:[2,5],complic:2,compon:2,compos:[2,5,15],comprehens:[2,14],compress:[2,9,13],comput:[1,2,5,7,8,11,12,15],computation:2,concept:5,conda:4,configur:5,confin:15,consequ:2,consid:[2,11,13],consist:[2,9],constant:3,constrain:2,construct:[2,7,9],constructor:[2,9,11,15],consult:2,contain:[1,2,4,7,8,9,10,11,12,13,15],continu:[2,11],contribut:[3,5],conveni:[2,15],convert:[5,12],convolut:3,coordin:[1,2,5,9,10,12,13],coords_in_bound:12,core:5,correct:[9,12],correspond:[1,2,5,7,8,9,10,12,13,15],could:[2,3],counterpart:2,cover:2,cpu:[2,4,11],cpu_n_thread:[2,11],creat:[1,2,7,9,10,11,12,15],create_subdirectori:[2,15],create_test_set:11,criterion:[2,11,13,15],csv:1,cuda:[2,4,7,11,15],current:[2,5,7,9,11,12,15],curv:[2,5,15],custom:2,cython:4,dag:15,data:[0,1,2,5,7,8,9,10,11,13,15],data_across_featur:8,data_fram:1,data_parallel:[2,11],data_sampl:[2,11],datafram:1,dataparallel:15,dataset:[2,5,9,10,11,13,15],date:[2,15],debug:[2,11,15],decod:[9,12],deep:0,deepsea:2,defin:[5,9,13],delet:2,delimit:8,depend:2,deriv:8,describ:[2,5],descript:[2,7],design:[5,15],desir:15,detail:[2,9],detect:9,determin:[2,10,13,15],develop:[3,5,9],dict:[1,2,11,12,13,15],dictionari:[2,11,12,13,15],diff:[1,2,7,8],differ:[1,2,3,5,7,8,9,13,15],difficult:2,dimens:[2,8],dir:[2,15],directli:[2,4,6,10,12],directori:[2,7,9,11,12,13,15],discuss:5,disk:[9,15],displai:1,distinct:[2,9,11,13,15],distinct_featur:2,distinguish:8,distribut:3,divers:5,divid:[9,10],dna:[2,5,12],doc:5,docopt:4,document:[2,3,8,9],doe:[1,2,5,7,9,11,12,15],done:9,dot:15,doubl:[2,7],download:4,dpi:15,draw:[1,5,9,10,11,15],drawn:[2,5,9],dtype:[1,12],due:4,dure:[2,3,5,8,9,11],each:[1,2,5,7,8,9,10,11,12,13,15],earli:15,eas:5,effect:[1,5,7,8,14],either:[2,4,5,8],elabor:8,element:[1,7,8,9,10,15],empti:[2,9],enabl:[4,7,11],encod:[2,9,12,13],encourag:2,end:[2,5,7,8,10,12,13,15],enforc:9,enough:[2,11],ensur:[1,12],enter:1,entri:[1,8],environ:[4,15],epoch:[2,11],equal:[1,2,13],equival:[2,11],error:[2,12,13],essenti:12,etc:[1,2,11],evalu:[11,15],evaluate_model:2,evaluatemodel:[2,5],evalut:5,even:2,event:8,everi:[1,2,11],exactli:9,examin:2,exampl:[1,3,5,6,9,10,11,12,13,15],example_predict:2,except:[1,2,13],exist:[2,7,9,11,12,13,15],exit:15,expand:10,expect:[7,9,12,15],experi:1,explain:2,exponenti:7,extens:[1,5],extra:1,extract:[1,12],extrem:9,fa_fil:2,faa:[12,13],fai:12,fall:9,fals:[1,2,7,8,9,10,11,12,13,15],faq:0,far:[2,11],fasta:[5,7,12],featur:[1,2,5,7,8,9,10,11,13,15],feature1:2,feature_index_dict:13,feature_threshold:[2,9,13],features_list:2,fetch:[9,10],few:2,fig_titl:15,figur:[1,2,5,6,15],file1:2,file2:2,file:[1,4,5,7,8,9,10,11,12,13,15],file_or_model:2,file_sampl:[0,2,3,9],filenam:2,filename_prefix:2,filepath:[2,10],fileprefix_logit:2,filesampl:[2,3,5,9,10],fill:2,filter_featur:1,find:[2,3],finish:[2,8,15],first:[1,2,4,9,12,13],five:13,flatironinstitut:3,flexibl:5,float32:12,float64:1,fly:[2,5],focu:1,fold:2,follow:[4,5,7,13,15],font:1,font_manag:1,font_properti:1,fontproperti:1,foo:15,form:9,formal:5,format:[2,5,15],forward:[1,2],found:[1,2,10,13,15],frac:8,fraction:9,frame:1,frequenc:[2,5,11],from:[1,2,5,7,8,9,10,11,12,13,15],from_fil:1,fulfil:5,full:10,functionlab:4,functiontyp:[1,13,15],further:[5,9,10,13],futur:[1,2,5,9],gap:1,gencod:1,gene:1,gener:[1,5,8,9,11,15],genom:[1,2,5,7,8,9,13],genomicfeatur:[5,9],get:[1,2,7,9,12,14],get_chr:12,get_chr_len:12,get_data:10,get_data_and_target:[9,10],get_dataset_in_batch:9,get_encoding_from_coord:12,get_feature_data:13,get_feature_from_index:[9,15],get_feature_from_index_fn:15,get_optim:2,get_predictions_for_fasta_fil:7,get_prot:12,get_prot_len:12,get_score_matrix_for:1,get_sequence_from_coord:12,get_sequence_from_encod:9,get_test_set:9,get_validation_set:9,git:4,github:[0,2,4,5,6],given:[1,2,5,7,9,10,12,15],govern:3,gpu:[2,4,7,11],graph:15,graph_obj:1,greater:[2,13],grid:3,group:[2,10],guarante:1,guid:14,handl:[7,8,9,15],handle_batch_predict:8,handle_na:8,handler:[8,15],hard:13,has:[2,7,9,11,13,15],have:[1,2,3,4,5,7,8,9,11,12,13,14,15],header:[2,7],heatmap:5,heavili:5,height:1,held:9,help:[1,3,6,8],helper:15,here:[0,2,15],hex:1,hg19:[1,2,7,12],hg38:[1,2,7,12],hg_reference_vers:1,hidden:3,hide:1,hierarchi:15,high:2,highli:5,histori:[11,15],hold:[1,9],holdout:[2,9],hope:5,horizont:1,hot:[9,12,13],hover:1,how:[2,3,15],howev:2,html:1,http:4,hyper:3,hyperopt:3,ident:1,identifi:[5,8],ignor:[2,13],implement:[2,3,5,9],improv:11,in_silico_mutagenesi:[2,7],in_silico_mutagenesis_from_fil:7,in_silico_mutagenesis_predict:7,inch:15,includ:[1,2,5,9,10,15],incorpor:5,increas:[2,7,15],indel:2,index:[0,2,5,7,9,12,13,15],index_feature_dict:13,index_to_bas:12,indic:[1,2,5,10,12,13,15],individu:[5,9,15],info_col:8,inform:[1,2,8,9,11,12,15],initi:[5,9,15],inplac:4,input:[1,7,8,9,12,13,15],input_featur:15,input_path:[1,2,7,12,13,15],input_sequ:2,insert:2,instal:[0,14],instanc:[5,12,13],instanti:2,instead:[2,5,15],integ:12,intend:5,interchang:13,interest:[2,3,15],interfac:[2,5],interpret:[0,2,5],interv:[1,5,9,10,15],interval_length:[9,15],intervals_path:[2,9],intervalssampl:[2,5,11],invalid:12,involv:2,is_posit:13,ism:[2,7],issu:[2,3,4,5],item:8,iter:11,its:[2,5,8,9,10,12,15],itself:3,job:[2,15],jupyt:2,just:15,kchen:3,kei:[2,10,11,12,13,15],kernel:3,keyword:[1,11,15],kind:[2,5],kit:5,know:[2,15],known:[5,11],kundaj:2,kwarg:[1,8,12,13,15],label:[1,2,5,9,10,13],labels_sort_fn:1,larg:[9,15],largest:1,last:[2,10,12,13],lastli:13,later:2,latest:[4,11],learn:[0,2,3,15],least:[2,9,13],leav:[2,7],left:[1,8],len_chr:12,len_prot:12,length:[1,2,7,8,9,10,12,13,15],less:[2,15],level:[0,1,2,5,8,11,15],leverag:5,librari:[0,2,3],like:[2,4,9,15],limit:[2,3,11],line:[1,2,3,4,9,10,15],linux:4,list:[1,2,7,8,9,10,11,12,13,15],liter:15,load:[1,2,5,9,10,11,15],load_features_list:2,load_test_set:[2,15],local:4,locat:[0,12],log:[2,5,8,9,11,15],logger:[5,15],logging_verbos:[2,11],logit:[2,5,7,8],logo:[1,5],look:[2,3,10,15],loss:[2,3,5,11,15],loss_criterion:[2,11],machin:[2,4,15],made:[1,2,5,7],mai:[1,2,3,5,8,9,12,15],mail:3,main:[2,3,5,11],make:[1,2,4,7,8],mani:[1,2],manipul:1,manner:1,manual:3,manuscript:2,map:[1,2,9,11,12,13,15],mask:1,mat:[2,5,9,10],match:[1,2,7,9,15],matfilesampl:[2,5],math:7,mathrm:8,matplotlib:[1,2,11,15],matrix:[1,5,8,9,10],matter:2,max:[1,2,15],max_effect:1,max_step:[2,11],maximum:11,mean:[1,2,15],measur:[2,5,11,12],meet:13,member:[5,12],memori:[2,9,11,15],messag:[2,11,15],method:[1,3,5,7,8,9,10,11,13,15],metric:[2,5,11,15],metric_fn:15,might:[2,15],mini:[2,7,8,9,10,11],minim:[3,5,11],minimum:[13,15],minor:15,miss:15,mode:[2,9,15],model:[1,7,8,9,10,11,14,15],model_config:15,modelarchitectureclassnam:2,modul:[0,1,2,3,5,7,8,9,10,11,12,13,15],monitor:[2,3,11],more:[2,7,8,9,11,12,15],most:[2,6,15],motif:1,move:1,much:2,multi:2,multifilesampl:[2,5,11],multipl:[1,3,11],must:[1,2,5,7,8,9,10,11,13,15],mutagenesi:[1,5,7,14],mutat:[1,2,7,14],mutate_n_bas:[2,7],mutations_list:7,n_alphabet:2,n_base:2,n_featur:[2,10,13],n_genomic_featur:2,n_sampl:[2,9,10],n_sequence_length:2,n_step:[2,11],n_target:2,n_test_sampl:[2,11],n_validation_sampl:[2,11],name:[1,2,5,7,8,9,11,12,13,15],namespac:5,ndarrai:[1,7,9,10,12,13,15],necessari:2,necessarili:2,need:[2,5,7,10,11,15],neg:[2,9],nest:15,network:3,neural:3,never:12,next:2,non:[1,2,9,13,15],non_strand_specif:2,none:[1,2,7,9,10,11,12,13,15],nonfeature_column:8,normal:12,note:[5,7,8,9,10,12,13,15],notebook:2,notic:2,now:[2,11,13,15],npz:2,nth_percentil:1,nth_step_report_stat:11,nth_step_save_checkpoint:11,nucleotid:[5,12],number:[1,2,3,5,7,8,9,10,11,13,15],numer:[5,9,10,12],numpi:[1,4,7,9,10,12,13,15],obj:[2,15],object:[1,2,7,8,9,11,12,13],observ:4,obtain:[2,11,15],occur:[1,8,9,12,15],odd:8,off:2,omit:2,onc:15,one:[1,2,7,8,9,11,12,13,15],ones:[1,5],onli:[1,2,5,7,9,10,11,12,15],onlin:[2,5],online_sampl:9,onlinesampl:[2,3,5,11],open:[1,13],openmp:[2,11],oper:[0,5,7,9,11],oppos:2,ops:[2,11,15],opt:1,optim:[2,7,11,15],optim_class:15,optim_kwarg:15,optimizer_class:[2,11],optimizer_kwarg:[2,11],option:[1,7,8,9,10,11,12,15],order:[1,2,7,8,9,10,11,13,15],ordereddict:15,org:3,organ:[1,2,12],origin:[1,2],other:[1,2,5,9,15],otherwis:[2,4,12,13,15],our:[2,5,8],out:[1,2,6,9,14,15],out_filenam:8,output:[0,1,3,7,8,9,11,12,15],output_dir:[2,7,9,11,15],output_handl:8,output_path:[1,8,15],output_path_prefix:[2,7],outsid:[9,12],over:[1,11],overfit:11,overlap:13,overrid:15,overview:0,overwrit:[2,11],overwritten:[2,11],own:[1,2,3,5,12,15],packag:[0,5,15],pad:2,page:0,pair:[9,10],palett:1,panda:1,parallel:[2,7,11],paramet:[1,3,5,7,8,9,10,11,12,13,15],pariti:9,pars:[2,5,9,15],part:[3,12],particular:[5,7],partit:[2,5,9,11],pass:[1,2,7,9,11,12,15],past:[12,13],path:[1,2,7,8,9,10,11,12,13,15],peak:13,peopl:2,per:[2,15],percentag:[2,5,9],perform:[1,2,3,5,7,9,11,15],period:2,pick:2,pip:4,plan:[4,5],pleas:[2,3,4,5,6,7],plot:[1,2,5,11],plotli:1,plt:[2,11],point:[1,2,3,11],pos:[1,2],posit:[1,5,7,9,11,12,13,15],position_sc:1,possibl:[2,12],power:[2,11],pre:9,precis:[5,15],precision_recall_curv:2,predefin:3,predict:[0,1,9,11,13,14,15],predictionshandl:7,prefer:[1,2],prefix:[2,7],prepar:3,prepend:8,presenc:[2,10],present:[2,5,7,13],prevent:5,previou:[2,11,15],previous:[4,15],print:2,probabl:[1,8,9,15],problem:[2,9],proce:15,process:[2,3,5,11],produc:[1,5,15],program:5,propag:2,proper:5,properti:1,proport:[2,9,13],proportion:15,prot:12,protein:[1,2,12,13],proteom:5,provid:[1,2,3,4,5,8,9,10,12,15],proxi:15,pth:[2,11],purpos:5,put:2,pyfaidx:12,pylearn2:[2,15],pyplot:[1,15],python:[2,4,5,15],pytorch:[0,2,3,15],queri:[2,5,9,12,13],quickli:[11,12],quickstart:14,radiu:9,rais:[1,9,12,15],random:[3,5,9,10,15],random_se:[2,10,15],randomli:[2,5,9],randompositionssampl:[2,5],randomsampl:11,rate:[2,3,15],rather:2,raw:[2,5],reach:10,read:[2,5,11,13,15],reader:2,readi:11,readm:6,reason:2,recal:[5,15],receiv:5,recommend:[2,4,7],reconcil:15,record:[2,8],recurs:15,redund:13,ref:[1,2,7,8],ref_writ:8,refer:[1,2,3,5,8,9,10],reference_mask:1,reference_sequ:[1,2,7,9,10],refrain:4,region:[2,5,9,12,13],regress:2,rel:1,relat:2,releas:[4,12],relev:2,reli:[2,5],rememb:1,remov:9,remove_metr:15,render:[1,6],replac:[2,7],report:[2,7,11],report_gt_feature_n_posit:[2,11,15],report_stats_every_n_step:[2,11],repositori:[0,2,4,6],repres:[5,12],represent:[5,9,10,12],reproduc:[2,9,15],request:[2,3,5],requir:[4,5,11,15],resolut:15,resolv:2,resourc:[0,2],respect:5,result:[1,2,5,7,8,13,15],resum:2,retriev:[2,5,9,10,11,12,13],reus:5,revers:[2,12,15],review:2,right:[2,8,13],rna:[2,5],roc:[2,11,15],roc_auc:[2,11,15],roc_auc_scor:[2,11,15],roc_curv:2,row:[1,8,9,12],row_id:8,run:[2,3,9,11],runtim:7,said:[5,12],same:[2,7,8,9,10,11,12,13,15],sampl:[2,8,9,10,11,12,13,15],sample_from_interv:9,sample_neg:[2,9],sampler:[0,3,11],save:[2,5,7,8,9,11,15],save_checkpoint_every_n_step:[2,11],save_data:[2,7],save_dataset:[2,9],save_dataset_to_fil:[5,9],save_new_checkpoints_after_n_step:[2,11],scalabl:3,scale:1,scatter:1,scikit:[2,3],scipi:2,score:[1,2,3,5,7,8,15],score_matrix:1,script:[2,3,4],sdk:[0,4],seaborn:[1,15],search:[0,3],second:1,section:5,see:[2,5,9,11,12],seed:[2,9,10,15],seen:[2,11],select:[2,3,9],selen:[1,4,5,11,14],selene_cli:4,selene_sdk:[0,2,3,5,8],self:[9,12,13],semicolon:[2,10],semicolon_separated_class_indic:2,separ:[1,2,8,9,10,15],sequenc:[0,1,3,7,8,9,10,11,13,15],sequence_alphabet_axi:[2,10],sequence_batch_axi:[2,10],sequence_kei:[2,10],sequence_length:[2,7,9,10],sequence_typ:1,sequences1:2,sequences_and_target:[9,10],set:[2,3,4,5,7,8,9,10,11,12,15],set_mod:9,setup:4,sever:5,shape:[1,2,7,8,9,10],share:2,should:[1,2,5,7,8,9,10,11,12,13,14,15],show:[1,2],shown:13,shuffl:[2,10],shufl:2,sign:11,signifi:12,silico:[1,5,7],silico_:14,similar:2,sinc:[2,5],singl:[3,5,9,10,13],six:5,size:[1,2,3,7,8,9,10,11,12],skip_threshold:15,sklearn:[2,11,15],skorch:3,smaller:9,snp:2,softwar:5,some:[1,3,4,5,8,13],someth:2,sort:[1,13],sourc:[1,7,8,9,10,11,12,13,15],space:[2,7],spearmint:3,specif:[2,5,13,15],specifi:[1,2,3,5,7,9,10,11,12,13,15],specii:10,stack:1,standard:[1,2],start:[2,3,5,7,9,10,12,13,14,15],state:[2,11,15],state_dict:[2,15],state_dict_onli:2,statement:[2,9],statist:[2,11],statsmodel:2,step:[2,5,11],still:[8,9,11],store:[1,2,8,13],str:[1,2,7,8,9,10,11,12,13,15],strand:[2,9,12,13,15],strand_sid:9,string:[1,5,9,12,15],strongli:2,structur:5,studi:[2,3],style:15,sub:[1,2,5,15],subclass:[1,5,9],subdirectori:2,sublist:15,submit:[2,3],submodul:15,subsequ:5,subset:[5,9,10],substitut:15,successfulli:15,suffici:2,suffix:8,sum:1,summari:[2,11],suppli:[5,9],support:[2,4,5,12,15],sure:[2,4],surrounding_sequence_radiu:9,svg:[2,15],symbol:12,tab:[2,8],tabix:[2,5,9,12,13],tabixerror:13,take:[1,2,5,13,15],taken:[1,15],tar:[2,11],target:[0,2,3,9,10,11,12,15],target_matrix:[9,10],target_path:[2,9],targets_avail:[2,10],targets_b:2,targets_batch_axi:[2,10],targets_kei:[2,10],targets_matrix:[9,10],tbi:13,tell:9,templat:2,termin:4,test:[2,5,9,11,15],test_data:2,test_holdout:[2,9],test_perform:2,test_predict:2,test_sampl:[2,9],test_target:2,testdata:2,testxdata:2,text:1,textiowrapp:8,than:[1,2,8,9,11,13,15],thei:[1,2,5,7,15],them:[2,5,8],therebi:13,therefor:[2,15],thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15],thing:2,third:1,those:[1,2,5,8,9,12,15],though:2,thread:[2,11],threshold:[1,2,13],threshold_lin:1,through:[2,3,4,5,15],thu:[13,15],tick:1,ties:11,time:[1,2,7,8,9,10,12,13,15],timestamp:[2,11],titl:15,todo:[1,8,9,13],togeth:[2,8,11],top:[1,2,5,15],torch:[2,4,7,11,15],torchvis:4,total:[2,9,10,11],track:15,train:[1,7,9,11,12,14,15],train_and_valid:11,train_model:[2,3,11],train_sampl:[2,9],trained_model_path:[2,7,11],training_loss:11,trainmodel:[2,5,9],transform:[1,12],tri:2,trial:3,tripl:[2,7],truncat:[2,10],tsv:2,tune:3,tupl:[1,2,7,9,10,12,15],tutori:[0,2],two:[2,5,8],txt:[2,3,11,15],type:[1,2,5,7,9,10,11,12,13,15],typic:[2,9],uncertain:12,undefin:12,under:5,underli:1,underscor:[2,7],uniqu:8,unit:3,unk_bas:12,unknown:[2,12],unless:[2,15],unlik:5,unsupport:1,until:11,updat:15,upload:3,upon:2,usag:[2,15],use:[1,2,3,5,7,8,9,11,12,15],use_cuda:[2,7,11],use_sequence_nam:[2,7],used:[1,5,8,11,12,15],useful:[1,2,3,6,9,15],user:[1,2,3,4,5,9,11,15],uses:[1,2,5,15],using:[3,4,5,7,11],usual:1,util:[0,2],v28:1,val1:2,val2:2,valid:[2,3,5,8,9,11,12],validate_sampl:[2,9],validation_holdout:[2,9],valu:[1,2,3,8,9,11,12,13,15],valueerror:[1,9,12,15],vari:5,variabl:[2,3,7,8,9,10,11,12,13,15],variant:[1,5,7,8,14],variant_effect_predict:[2,7],variou:[2,11],vcf:[2,5,7],vcf_file:[2,7],vector:[8,9,13],verbos:[2,11,15],version:[1,2,4,7],via:[2,3,5],view:6,vis:1,visual:[1,2,11,15],visualize_precision_recall_curv:15,visualize_roc_curv:15,wai:[2,9,13],want:[1,2,3,5,8,9,11,12,15],warn:[2,11,15],web:1,websit:[2,6],weight:[2,3,7,11,15],welcom:0,well:[2,9,10,11],were:[1,15],what:[2,5,6,7,9,15],whatev:2,when:[2,4,7,9,12],where:[1,2,7,8,9,10,11,12,13,15],wherev:15,whether:[2,7,9,10,11,12,13,15],which:[1,2,3,5,7,8,9,10,11,12,13,15],whole:[2,5],width:1,window:9,wise:1,wish:2,within:[1,2,3,9,10,12,13,15],without:[8,15],work:[2,3,4,6,7],worth:5,would:[1,2,4,9,12,15],wrap:[3,15],wrapper:12,write:[2,7,8,15],write_feature_scores_to_fil:15,written:[2,7,8,15],y_score:2,y_true:2,yaml:[2,15],yet:[2,7,9,14],yfg:15,yfp:[12,15],yield:3,yml:4,you:[2,3,4,6,7,8,9,11,12,14,15],your:[2,3,4,7,9,11,12,15],yourself:[2,3],yticklabel:1,zero:[12,13],zoo:3},titles:["Selene documentation","selene_sdk.interpret","Selene CLI operations and outputs","FAQ and additional resources","Installation","Functional overview of the SDK","Tutorials","selene_sdk.predict","selene.predict.predict_handlers","selene_sdk.samplers","selene_sdk.samplers.file_samplers","selene_sdk","selene_sdk.sequences","selene_sdk.targets","Tutorials","selene_sdk.utils"],titleterms:{"class":2,"export":3,"function":5,"import":2,The:5,Using:5,addit:[2,3,4],anaconda:4,analyz:2,analyzesequ:7,api:5,architectur:2,bed:2,bedfilesampl:10,cli:[2,4],config:15,configur:[2,15],depend:4,diffscorehandl:8,document:0,effect:2,encoding_to_sequ:12,evalu:[2,5],evaluatemodel:11,exampl:2,execut:15,expect:2,extend:3,faq:3,fasta:2,file:2,file_sampl:10,follow:2,from:4,full:2,gener:2,genom:12,genomicfeatur:13,get_indices_and_prob:15,get_reverse_encod:12,heatmap:1,hyperparamet:3,indic:0,initialize_logg:15,initialize_model:15,input:2,instal:4,instanti:15,interpret:1,interv:2,intervalssampl:9,ismresult:1,kipoi:3,load_features_list:15,load_model_from_state_dict:15,load_path:15,load_variant_abs_diff_scor:1,logitscorehandl:8,make:5,matfilesampl:10,matrix:2,method:2,model:[2,3,5],multifilesampl:9,multipl:2,mutagenesi:2,nonstrandspecif:15,note:2,object:15,onlinesampl:9,oper:[2,15],optim:3,option:2,ordered_variants_and_indic:1,output:2,overview:[2,5],paramet:2,parse_configs_and_run:15,performancemetr:15,posit:2,predict:[2,5,7,8],predict_handl:8,predictionshandl:8,proteom:12,random:2,randompositionssampl:9,requir:2,rescale_score_matrix:1,resourc:3,run:[4,15],sampl:5,sampler:[2,5,9,10],sdk:5,section:2,selen:[0,2,3,8,15],selene_sdk:[1,7,9,10,11,12,13,15],sequenc:[2,5,12],sequence_logo:1,sequence_to_encod:12,silico:2,singl:2,some:2,sort_standard_chr:1,sourc:4,submodul:5,tabl:0,target:[5,13],train:[2,3,5],trainmodel:11,tutori:[6,14],used:2,using:2,util:[5,15],variant:2,variant_diffs_scatter_plot:1,visual:5,write_to_fil:8,writepredictionshandl:8,writerefalthandl:8,yml:15}})