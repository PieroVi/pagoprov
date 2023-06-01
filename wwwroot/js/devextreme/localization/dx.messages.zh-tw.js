/*!
* DevExtreme (dx.messages.zh-tw.js)
* Version: 22.1.7
* Build date: Thu Dec 08 2022
*
* Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        "zh-tw": {
            Yes: "\u662f",
            No: "\u5426",
            Cancel: "\u53d6\u6d88",
            Close: "\u95dc\u9589",
            Clear: "\u6e05\u9664",
            Done: "\u5b8c\u6210",
            Loading: "\u6b63\u5728\u8f09\u5165...",
            Select: "\u9078\u64c7...",
            Search: "\u641c\u5c0b",
            Back: "\u8fd4\u56de",
            OK: "\u78ba\u5b9a",
            "dxCollectionWidget-noDataText": "\u6c92\u6709\u8981\u986f\u793a\u7684\u8cc7\u6599",
            "dxDropDownEditor-selectLabel": "\u9078\u64c7",
            "validation-required": "\u5fc5\u9700",
            "validation-required-formatted": "{0} \u662f\u5fc5\u9700\u7684",
            "validation-numeric": "\u503c\u5fc5\u9808\u662f\u4e00\u500b\u6578\u5b57",
            "validation-numeric-formatted": "{0} \u5fc5\u9808\u662f\u4e00\u500b\u6578\u5b57",
            "validation-range": "\u503c\u8d85\u51fa\u7bc4\u570d",
            "validation-range-formatted": "{0} \u8d85\u51fa\u7bc4\u570d",
            "validation-stringLength": "\u8a72\u503c\u7684\u9577\u5ea6\u4e0d\u6b63\u78ba",
            "validation-stringLength-formatted": "{0} \u7684\u9577\u5ea6\u4e0d\u6b63\u78ba",
            "validation-custom": "\u503c\u7121\u6548",
            "validation-custom-formatted": "{0} \u503c\u7121\u6548",
            "validation-async": "\u503c\u7121\u6548",
            "validation-async-formatted": "{0} \u503c\u7121\u6548",
            "validation-compare": "\u503c\u4e0d\u5339\u914d",
            "validation-compare-formatted": "{0} \u4e0d\u5339\u914d",
            "validation-pattern": "\u503c\u4e0d\u7b26\u5408\u8a72\u6a21\u5f0f",
            "validation-pattern-formatted": "{0} \u4e0d\u5339\u914d\u8a72\u6a21\u5f0f",
            "validation-email": "\u96fb\u5b50\u90f5\u4ef6\u7121\u6548",
            "validation-email-formatted": "{0} \u7121\u6548",
            "validation-mask": "\u503c\u7121\u6548",
            "dxLookup-searchPlaceholder": "\u6700\u5c0f\u5b57\u5143\u6578: {0}",
            "dxList-pullingDownText": "\u4e0b\u62c9\u4ee5\u91cd\u65b0\u6574\u7406...",
            "dxList-pulledDownText": "\u653e\u958b\u4ee5\u91cd\u65b0\u6574\u7406...",
            "dxList-refreshingText": "\u91cd\u65b0\u6574\u7406\u4e2d...",
            "dxList-pageLoadingText": "\u6b63\u5728\u8f09\u5165...",
            "dxList-nextButtonText": "\u66f4\u591a",
            "dxList-selectAll": "\u5168\u9078",
            "dxListEditDecorator-delete": "\u522a\u9664",
            "dxListEditDecorator-more": "\u66f4\u591a",
            "dxScrollView-pullingDownText": "\u4e0b\u62c9\u4ee5\u91cd\u65b0\u6574\u7406...",
            "dxScrollView-pulledDownText": "\u653e\u958b\u4ee5\u91cd\u65b0\u6574\u7406...",
            "dxScrollView-refreshingText": "\u91cd\u65b0\u6574\u7406\u4e2d...",
            "dxScrollView-reachBottomText": "\u6b63\u5728\u8f09\u5165...",
            "dxDateBox-simulatedDataPickerTitleTime": "\u9078\u64c7\u6642\u9593",
            "dxDateBox-simulatedDataPickerTitleDate": "\u9078\u64c7\u65e5\u671f",
            "dxDateBox-simulatedDataPickerTitleDateTime": "\u9078\u64c7\u65e5\u671f\u548c\u6642\u9593",
            "dxDateBox-validation-datetime": "\u503c\u5fc5\u9808\u662f\u65e5\u671f\u6216\u6642\u9593",
            "dxFileUploader-selectFile": "\u9078\u64c7\u6587\u4ef6",
            "dxFileUploader-dropFile": "\u6216\u8005\u628a\u6587\u4ef6\u653e\u5728\u6b64\u8655",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "\u4e0a\u50b3",
            "dxFileUploader-uploaded": "\u5df2\u4e0a\u50b3",
            "dxFileUploader-readyToUpload": "\u6e96\u5099\u4e0a\u50b3",
            "dxFileUploader-uploadFailedMessage": "\u4e0a\u50b3\u5931\u6557",
            "dxFileUploader-invalidFileExtension": "\u6587\u4ef6\u985e\u578b\u932f\u8aa4",
            "dxFileUploader-invalidMaxFileSize": "\u6587\u4ef6\u904e\u5927",
            "dxFileUploader-invalidMinFileSize": "\u6587\u4ef6\u904e\u5c0f",
            "dxRangeSlider-ariaFrom": "\u5f9e",
            "dxRangeSlider-ariaTill": "\u81f3",
            "dxSwitch-switchedOnText": "\u958b",
            "dxSwitch-switchedOffText": "\u95dc",
            "dxForm-optionalMark": "\u53ef\u9078",
            "dxForm-requiredMessage": "{0} \u662f\u5fc5\u9808\u7684",
            "dxNumberBox-invalidValueMessage": "\u503c\u5fc5\u9808\u662f\u4e00\u500b\u6578\u5b57",
            "dxNumberBox-noDataText": "\u7121\u8cc7\u6599",
            "dxDataGrid-columnChooserTitle": "\u6b04\u9078\u64c7\u5668",
            "dxDataGrid-columnChooserEmptyText": "\u5728\u9019\u88e1\u62d6\u52d5\u4e00\u5217\u96b1\u85cf\u5b83",
            "dxDataGrid-groupContinuesMessage": "\u4e0b\u4e00\u9801\u63a5\u7e8c",
            "dxDataGrid-groupContinuedMessage": "\u63a5\u7e8c\u4e0a\u4e00\u9801",
            "dxDataGrid-groupHeaderText": "\u901a\u904e\u8a72\u6b04\u5206\u7d44",
            "dxDataGrid-ungroupHeaderText": "\u53d6\u6d88\u5206\u7d44",
            "dxDataGrid-ungroupAllText": "\u53d6\u6d88\u6240\u6709\u5206\u7d44",
            "dxDataGrid-editingEditRow": "\u7de8\u8f2f",
            "dxDataGrid-editingSaveRowChanges": "\u4fdd\u5b58",
            "dxDataGrid-editingCancelRowChanges": "\u53d6\u6d88",
            "dxDataGrid-editingDeleteRow": "\u522a\u9664",
            "dxDataGrid-editingUndeleteRow": "\u53d6\u6d88\u522a\u9664",
            "dxDataGrid-editingConfirmDeleteMessage": "\u4f60\u78ba\u5b9a\u8981\u522a\u9664\u9019\u689d\u8a18\u9304\u55ce\uff1f",
            "dxDataGrid-validationCancelChanges": "\u53d6\u6d88\u66f4\u6539",
            "dxDataGrid-groupPanelEmptyText": "\u62d6\u52d5\u6b04\u6a19\u984c\u81f3\u6b64\u4ee5\u9032\u884c\u6b04\u5206\u7d44",
            "dxDataGrid-noDataText": "\u7121\u8cc7\u6599",
            "dxDataGrid-searchPanelPlaceholder": "\u641c\u5c0b...",
            "dxDataGrid-filterRowShowAllText": "(\u5168\u90e8)",
            "dxDataGrid-filterRowResetOperationText": "\u91cd\u7f6e",
            "dxDataGrid-filterRowOperationEquals": "\u7b49\u65bc",
            "dxDataGrid-filterRowOperationNotEquals": "\u4e0d\u7b49\u65bc",
            "dxDataGrid-filterRowOperationLess": "\u5c0f\u65bc",
            "dxDataGrid-filterRowOperationLessOrEquals": "\u5c0f\u65bc\u6216\u7b49\u65bc",
            "dxDataGrid-filterRowOperationGreater": "\u5927\u65bc",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "\u5927\u65bc\u6216\u7b49\u65bc",
            "dxDataGrid-filterRowOperationStartsWith": "\u4ee5...\u958b\u59cb",
            "dxDataGrid-filterRowOperationContains": "\u5305\u542b",
            "dxDataGrid-filterRowOperationNotContains": "\u4e0d\u5305\u542b",
            "dxDataGrid-filterRowOperationEndsWith": "\u7d50\u675f\u65bc",
            "dxDataGrid-filterRowOperationBetween": "\u4e4b\u9593",
            "dxDataGrid-filterRowOperationBetweenStartText": "\u958b\u59cb",
            "dxDataGrid-filterRowOperationBetweenEndText": "\u7d50\u675f",
            "dxDataGrid-applyFilterText": "\u61c9\u7528\u904e\u6ffe\u5668",
            "dxDataGrid-trueText": "\u771f",
            "dxDataGrid-falseText": "\u5047",
            "dxDataGrid-sortingAscendingText": "\u905e\u589e\u6392\u5e8f",
            "dxDataGrid-sortingDescendingText": "\u905e\u6e1b\u6392\u5e8f",
            "dxDataGrid-sortingClearText": "\u6e05\u9664\u6392\u5e8f",
            "dxDataGrid-editingSaveAllChanges": "\u4fdd\u5b58\u4fee\u6539",
            "dxDataGrid-editingCancelAllChanges": "\u653e\u68c4\u4fee\u6539",
            "dxDataGrid-editingAddRow": "\u6dfb\u52a0\u4e00\u5217",
            "dxDataGrid-summaryMin": "\u6700\u5c0f\u503c: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} \u7684\u6700\u5c0f\u503c\u70ba {0}",
            "dxDataGrid-summaryMax": "\u6700\u5927\u503c: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} \u7684\u6700\u5927\u503c\u70ba {0}",
            "dxDataGrid-summaryAvg": "\u5e73\u5747\u503c: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} \u7684\u5e73\u5747\u503c\u70ba {0}",
            "dxDataGrid-summarySum": "\u7e3d\u548c: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} \u7684\u7e3d\u548c\u70ba {0}",
            "dxDataGrid-summaryCount": "\u8a08\u6578: {0}",
            "dxDataGrid-columnFixingFix": "\u56fa\u5b9a",
            "dxDataGrid-columnFixingUnfix": "\u4e0d\u56fa\u5b9a",
            "dxDataGrid-columnFixingLeftPosition": "\u5411\u5de6",
            "dxDataGrid-columnFixingRightPosition": "\u5411\u53f3",
            "dxDataGrid-exportTo": "\u532f\u51fa",
            "dxDataGrid-exportToExcel": "\u532f\u51faExcel\u6587\u4ef6",
            "dxDataGrid-exporting": "\u532f\u51fa...",
            "dxDataGrid-excelFormat": "Excel\u6587\u4ef6",
            "dxDataGrid-selectedRows": "\u5df2\u9078\u5217",
            "dxDataGrid-exportSelectedRows": "\u532f\u51fa\u5df2\u9078\u884c",
            "dxDataGrid-exportAll": "\u532f\u51fa\u6240\u6709\u8cc7\u6599",
            "dxDataGrid-headerFilterEmptyValue": "(\u7a7a\u767d)",
            "dxDataGrid-headerFilterOK": "\u597d",
            "dxDataGrid-headerFilterCancel": "\u53d6\u6d88",
            "dxDataGrid-ariaColumn": "\u6b04",
            "dxDataGrid-ariaValue": "\u503c",
            "dxDataGrid-ariaFilterCell": "\u904e\u6ffe\u55ae\u5143",
            "dxDataGrid-ariaCollapse": "\u647a\u758a",
            "dxDataGrid-ariaExpand": "\u5c55\u958b",
            "dxDataGrid-ariaDataGrid": "\u8cc7\u6599\u7db2\u683c",
            "dxDataGrid-ariaSearchInGrid": "\u5728\u8cc7\u6599\u7db2\u683c\u4e2d\u641c\u5c0b",
            "dxDataGrid-ariaSelectAll": "\u5168\u9078",
            "dxDataGrid-ariaSelectRow": "\u9078\u64c7\u5217",
            "dxDataGrid-filterBuilderPopupTitle": "\u904e\u6ffe\u5668\u751f\u6210\u5668",
            "dxDataGrid-filterPanelCreateFilter": "\u5275\u5efa\u904e\u6ffe\u5668",
            "dxDataGrid-filterPanelClearFilter": "\u6e05\u7a7a",
            "dxDataGrid-filterPanelFilterEnabledHint": "\u555f\u7528\u8a72\u904e\u6ffe\u5668",
            "dxTreeList-ariaTreeList": "\u6a39\u72c0\u5217\u8868",
            "dxTreeList-editingAddRowToNode": "\u6dfb\u52a0",
            "dxPager-infoText": "\u7b2c{0}\u9801,\u5171{1}\u9801 ({2} \u500b\u9805\u76ee)",
            "dxPager-pagesCountText": "\u5230",
            "dxPager-pageSizesAllText": "\u5168\u90e8",
            "dxPivotGrid-grandTotal": "\u5408\u8a08",
            "dxPivotGrid-total": "{0} \u7e3d\u8a08",
            "dxPivotGrid-fieldChooserTitle": "\u6b04\u4f4d\u9078\u64c7\u5668",
            "dxPivotGrid-showFieldChooser": "\u986f\u793a\u6b04\u4f4d\u9078\u64c7\u5668",
            "dxPivotGrid-expandAll": "\u5168\u90e8\u5c55\u958b",
            "dxPivotGrid-collapseAll": "\u5168\u90e8\u647a\u758a",
            "dxPivotGrid-sortColumnBySummary": '\u6309 "{0}" \u6b04\u6392\u5e8f',
            "dxPivotGrid-sortRowBySummary": '\u6309 "{0}" \u5217\u6392\u5e8f',
            "dxPivotGrid-removeAllSorting": "\u6e05\u9664\u6240\u6709\u6392\u5e8f",
            "dxPivotGrid-dataNotAvailable": "\u4e0d\u9069\u7528",
            "dxPivotGrid-rowFields": "\u5217\u6b04\u4f4d",
            "dxPivotGrid-columnFields": "\u6b04\u6b04\u4f4d",
            "dxPivotGrid-dataFields": "\u8cc7\u6599\u6b04\u4f4d",
            "dxPivotGrid-filterFields": "\u904e\u6ffe\u6b04\u4f4d",
            "dxPivotGrid-allFields": "\u6240\u6709\u6b04\u4f4d",
            "dxPivotGrid-columnFieldArea": "\u5c07\u6b04\u6b04\u4f4d\u62d6\u52d5\u5230\u6b64\u8655",
            "dxPivotGrid-dataFieldArea": "\u5c07\u8cc7\u6599\u62d6\u52d5\u5230\u6b64\u8655",
            "dxPivotGrid-rowFieldArea": "\u5c07\u5217\u6b04\u4f4d\u62d6\u5230\u5230\u6b64\u6b21",
            "dxPivotGrid-filterFieldArea": "\u62d6\u52d5\u7be9\u9078\u6b04\u4f4d\u5230\u6b64\u8655",
            "dxScheduler-editorLabelTitle": "\u6a19\u984c",
            "dxScheduler-editorLabelStartDate": "\u958b\u59cb\u65e5\u671f",
            "dxScheduler-editorLabelEndDate": "\u7d50\u675f\u65e5\u671f",
            "dxScheduler-editorLabelDescription": "\u63cf\u8ff0",
            "dxScheduler-editorLabelRecurrence": "\u91cd\u8907",
            "dxScheduler-openAppointment": "\u6253\u958b\u65e5\u7a0b",
            "dxScheduler-recurrenceNever": "\u6c38\u4e0d",
            "dxScheduler-recurrenceMinutely": "\u6bcf\u5206\u9418",
            "dxScheduler-recurrenceHourly": "\u6bcf\u5c0f\u6642",
            "dxScheduler-recurrenceDaily": "\u65e5\u5e38",
            "dxScheduler-recurrenceWeekly": "\u6bcf\u9031",
            "dxScheduler-recurrenceMonthly": "\u6bcf\u6708",
            "dxScheduler-recurrenceYearly": "\u6bcf\u5e74",
            "dxScheduler-recurrenceRepeatEvery": "\u6240\u6709",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "\u505c\u6b62\u91cd\u8907",
            "dxScheduler-recurrenceAfter": "\u4e4b\u5f8c",
            "dxScheduler-recurrenceOn": "\u5728",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "\u65e5",
            "dxScheduler-recurrenceRepeatWeekly": "\u5468",
            "dxScheduler-recurrenceRepeatMonthly": "\u6708",
            "dxScheduler-recurrenceRepeatYearly": "\u5e74",
            "dxScheduler-switcherDay": "\u65e5",
            "dxScheduler-switcherWeek": "\u5468",
            "dxScheduler-switcherWorkWeek": "\u5de5\u4f5c\u5468",
            "dxScheduler-switcherMonth": "\u6708",
            "dxScheduler-switcherAgenda": "\u8b70\u7a0b",
            "dxScheduler-switcherTimelineDay": "\u6642\u9593\u8ef8\u65e5",
            "dxScheduler-switcherTimelineWeek": "\u6642\u9593\u8ef8\u5468",
            "dxScheduler-switcherTimelineWorkWeek": "\u6642\u9593\u8ef8\u5de5\u4f5c\u5468",
            "dxScheduler-switcherTimelineMonth": "\u6642\u9593\u8ef8\u6708",
            "dxScheduler-recurrenceRepeatOnDate": "\u65bc\u65e5\u671f",
            "dxScheduler-recurrenceRepeatCount": "\u4e8b\u4ef6",
            "dxScheduler-allDay": "\u5168\u5929",
            "dxScheduler-confirmRecurrenceEditMessage": "\u4f60\u60f3\u53ea\u4fee\u6539\u8a72\u65e5\u7a0b\u9084\u662f\u60f3\u4fee\u6539\u6574\u500b\u7cfb\u5217\u7684\u65e5\u7a0b?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u4f60\u60f3\u53ea\u522a\u9664\u9019\u500b\u65e5\u7a0b\u9084\u662f\u60f3\u522a\u9664\u6574\u500b\u7cfb\u5217\u7684\u65e5\u7a0b?",
            "dxScheduler-confirmRecurrenceEditSeries": "\u4fee\u6539\u8a72\u7cfb\u5217\u7684\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceDeleteSeries": "\u522a\u9664\u8a72\u7cfb\u5217\u7684\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceEditOccurrence": "\u4fee\u6539\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "\u522a\u9664\u65e5\u7a0b",
            "dxScheduler-noTimezoneTitle": "\u6c92\u6709\u6642\u5340",
            "dxScheduler-moreAppointments": "{0} \u66f4\u591a",
            "dxCalendar-todayButtonText": "\u4eca\u5929",
            "dxCalendar-ariaWidgetName": "\u65e5\u66c6",
            "dxColorView-ariaRed": "\u7d05\u8272",
            "dxColorView-ariaGreen": "\u7da0\u8272",
            "dxColorView-ariaBlue": "\u85cd\u8272",
            "dxColorView-ariaAlpha": "\u900f\u660e\u5ea6",
            "dxColorView-ariaHex": "\u8272\u6a19",
            "dxTagBox-selected": "{0} \u5df2\u9078\u64c7",
            "dxTagBox-allSelected": "\u5df2\u5168\u9078 ({0})",
            "dxTagBox-moreSelected": "{0} \u66f4\u591a",
            "vizExport-printingButtonText": "\u5217\u5370",
            "vizExport-titleMenuText": "\u532f\u51fa\u4e2d/\u5217\u5370\u4e2d",
            "vizExport-exportButtonText": "{0} \u6587\u4ef6",
            "dxFilterBuilder-and": "\u8207",
            "dxFilterBuilder-or": "\u6216",
            "dxFilterBuilder-notAnd": "\u8207\u975e",
            "dxFilterBuilder-notOr": "\u6216\u975e",
            "dxFilterBuilder-addCondition": "\u6dfb\u52a0\u689d\u4ef6",
            "dxFilterBuilder-addGroup": "\u6dfb\u52a0\u7d44",
            "dxFilterBuilder-enterValueText": "<\u8f38\u5165\u503c>",
            "dxFilterBuilder-filterOperationEquals": "\u7b49\u65bc",
            "dxFilterBuilder-filterOperationNotEquals": "\u4e0d\u7b49\u65bc",
            "dxFilterBuilder-filterOperationLess": "\u5c0f\u65bc",
            "dxFilterBuilder-filterOperationLessOrEquals": "\u5c0f\u65bc\u6216\u7b49\u65bc",
            "dxFilterBuilder-filterOperationGreater": "\u5927\u65bc",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "\u5927\u65bc\u6216\u7b49\u65bc",
            "dxFilterBuilder-filterOperationStartsWith": "\u958b\u59cb\u65bc",
            "dxFilterBuilder-filterOperationContains": "\u5305\u542b",
            "dxFilterBuilder-filterOperationNotContains": "\u4e0d\u5305\u542b",
            "dxFilterBuilder-filterOperationEndsWith": "\u7d50\u675f\u65bc",
            "dxFilterBuilder-filterOperationIsBlank": "\u7a7a",
            "dxFilterBuilder-filterOperationIsNotBlank": "\u4e0d\u70ba\u7a7a",
            "dxFilterBuilder-filterOperationBetween": "\u4e4b\u9593",
            "dxFilterBuilder-filterOperationAnyOf": "\u4efb\u4f55\u4e00\u500b",
            "dxFilterBuilder-filterOperationNoneOf": "\u4efb\u4f55\u4e00\u500b\u90fd\u4e0d",
            "dxHtmlEditor-dialogColorCaption": "\u66f4\u6539\u5b57\u9ad4\u984f\u8272",
            "dxHtmlEditor-dialogBackgroundCaption": "\u66f4\u6539\u80cc\u666f\u984f\u8272",
            "dxHtmlEditor-dialogLinkCaption": "\u6dfb\u52a0\u93c8\u63a5",
            "dxHtmlEditor-dialogLinkUrlField": "\u93c8\u63a5\u5730\u5740",
            "dxHtmlEditor-dialogLinkTextField": "\u93c8\u63a5\u6587\u5b57",
            "dxHtmlEditor-dialogLinkTargetField": "\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u958b",
            "dxHtmlEditor-dialogImageCaption": "\u6dfb\u52a0\u5716\u7247",
            "dxHtmlEditor-dialogImageUrlField": "\u5716\u7247\u5730\u5740",
            "dxHtmlEditor-dialogImageAltField": "\u66ff\u4ee3\u6587\u5b57",
            "dxHtmlEditor-dialogImageWidthField": "\u5bec (px)",
            "dxHtmlEditor-dialogImageHeightField": "\u9577 (px)",
            "dxHtmlEditor-heading": "\u6a19\u984c",
            "dxHtmlEditor-normalText": "\u6b63\u6587"
        }
    })
}));
