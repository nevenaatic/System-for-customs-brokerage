const messages= [
    {
        "messageId": 51,
        "messageHeader": null,
        "message": "ERROR: Product ID (30105-087-13), Description (ETO: MTG PLATE MOD): Secondary HS number (0201100510) has expired.",
        "businessKey": "tsi_pd_hs_dtl.sub_org(lidija_company).ctry_code(US).hts_num(0201100510).tsi_prod_id(NEWPRODUCT1)",
        "tableName": "tsi_pd_hs_dtl",
        "errorFieldName": "hts_num",
        "ruleName": null
    },
    {
        "messageId": 28,
        "messageHeader": null,
        "message": "ERROR: Product ID (30105-087-31), Description (test): Primary HS number (0101210010) has expired.",
        "businessKey": "tsi_pd_hs.sub_org(lidija_company).ctry_code(US).tsi_prod_id(TESTPROD)",
        "tableName": "tsi_pd_hs",
        "errorFieldName": "hts_num",
        "ruleName": null
    }

]
export default messages;