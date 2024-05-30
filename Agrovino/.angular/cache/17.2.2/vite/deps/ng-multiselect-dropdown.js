import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-J5JU2N75.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-TBROOZEM.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Output,
  Pipe,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O245X4TD.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-J4B6MK7R.js";

// node_modules/ng-multiselect-dropdown/fesm2022/ng-multiselect-dropdown.mjs
function MultiSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0._placeholder);
  }
}
function MultiSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15)(1, "span", 16)(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 17);
    ɵɵlistener("click", function MultiSelectComponent_span_4_Template_a_click_4_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r11);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onItemClick($event, item_r8));
    });
    ɵɵtext(5, "x");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const k_r9 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("hidden", k_r9 > ctx_r1._settings.itemsShowLimit - 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", item_r8.text, " ");
  }
}
function MultiSelectComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("+", ctx_r2.itemShowRemaining(), "");
  }
}
function MultiSelectComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19);
    ɵɵlistener("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.toggleSelectAll());
    });
    ɵɵelement(1, "input", 20);
    ɵɵelementStart(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());
    ɵɵadvance(2);
    ɵɵtextInterpolate(!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
  }
}
function MultiSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 21)(1, "input", 22);
    ɵɵtwoWayListener("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r14.filter.text, $event) || (ctx_r14.filter.text = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.onFilterTextChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText);
    ɵɵtwoWayProperty("ngModel", ctx_r4.filter.text);
  }
}
function MultiSelectComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r20);
      const item_r17 = restoredCtx.$implicit;
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onItemClick($event, item_r17));
    });
    ɵɵelement(1, "input", 24);
    ɵɵelementStart(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r5.isSelected(item_r17))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r17) || item_r17.isDisabled);
    ɵɵattribute("aria-label", item_r17.text);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r17.text);
  }
}
function MultiSelectComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 25)(1, "h5");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6._settings.noFilteredDataAvailablePlaceholderText);
  }
}
function MultiSelectComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 26)(1, "h5");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r7._settings.noDataAvailablePlaceholderText);
  }
}
var _c0 = (a0) => ({
  "dropdown-multiselect--active": a0
});
var ListItem = class {
  id;
  text;
  isDisabled;
  constructor(source) {
    if (typeof source === "string" || typeof source === "number") {
      this.id = this.text = source;
      this.isDisabled = false;
    }
    if (typeof source === "object") {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
    }
  }
};
var ListFilterPipe = class _ListFilterPipe {
  transform(items, filter) {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => this.applyFilter(item, filter));
  }
  applyFilter(item, filter) {
    if (typeof item.text === "string" && typeof filter.text === "string") {
      return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    } else {
      return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
    }
  }
  static ɵfac = function ListFilterPipe_Factory(t) {
    return new (t || _ListFilterPipe)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "multiSelectFilter",
    type: _ListFilterPipe,
    pure: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListFilterPipe, [{
    type: Pipe,
    args: [{
      name: "multiSelectFilter",
      pure: false
    }]
  }], null, null);
})();
var ClickOutsideDirective = class _ClickOutsideDirective {
  _elementRef;
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  clickOutside = new EventEmitter();
  onClick(event, targetElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
  static ɵfac = function ClickOutsideDirective_Factory(t) {
    return new (t || _ClickOutsideDirective)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ClickOutsideDirective,
    selectors: [["", "clickOutside", ""]],
    hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event, $event.target);
        }, false, ɵɵresolveDocument);
      }
    },
    outputs: {
      clickOutside: "clickOutside"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    clickOutside: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event", "$event.target"]]
    }]
  });
})();
var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectComponent),
  multi: true
};
var noop = () => {
};
var MultiSelectComponent = class _MultiSelectComponent {
  listFilterPipe;
  cdr;
  _settings;
  _data = [];
  selectedItems = [];
  isDropdownOpen = true;
  _placeholder = "Select";
  _sourceDataType = null;
  // to keep note of the source data type. could be array of string/number/object
  _sourceDataFields = [];
  // store source data fields names
  filter = new ListItem(this.data);
  defaultSettings = {
    singleSelection: false,
    idField: "id",
    textField: "text",
    disabledField: "isDisabled",
    enableCheckAll: true,
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    allowSearchFilter: false,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 999999999999,
    searchPlaceholderText: "Search",
    noDataAvailablePlaceholderText: "No data available",
    noFilteredDataAvailablePlaceholderText: "No filtered data available",
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen: false,
    allowRemoteDataSearch: false
  };
  set placeholder(value) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = "Select";
    }
  }
  disabled = false;
  set settings(value) {
    if (value) {
      this._settings = Object.assign(this.defaultSettings, value);
    } else {
      this._settings = Object.assign(this.defaultSettings);
    }
  }
  set data(value) {
    if (!value) {
      this._data = [];
    } else {
      const firstItem = value[0];
      this._sourceDataType = typeof firstItem;
      this._sourceDataFields = this.getFields(firstItem);
      this._data = value.map((item) => typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
        id: item[this._settings.idField],
        text: item[this._settings.textField],
        isDisabled: item[this._settings.disabledField]
      }));
    }
  }
  onFilterChange = new EventEmitter();
  onDropDownClose = new EventEmitter();
  onSelect = new EventEmitter();
  onDeSelect = new EventEmitter();
  onSelectAll = new EventEmitter();
  onDeSelectAll = new EventEmitter();
  onTouchedCallback = noop;
  onChangeCallback = noop;
  onFilterTextChange($event) {
    this.onFilterChange.emit($event);
  }
  constructor(listFilterPipe, cdr) {
    this.listFilterPipe = listFilterPipe;
    this.cdr = cdr;
  }
  onItemClick($event, item) {
    if (this.disabled || item.isDisabled) {
      return false;
    }
    const found = this.isSelected(item);
    const allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;
    if (!found) {
      if (allowAdd) {
        this.addSelected(item);
      }
    } else {
      this.removeSelected(item);
    }
    if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
      this.closeDropdown();
    }
  }
  writeValue(value) {
    if (value !== void 0 && value !== null && value.length > 0) {
      if (this._settings.singleSelection) {
        try {
          if (value.length >= 1) {
            const firstItem = value[0];
            this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
              id: firstItem[this._settings.idField],
              text: firstItem[this._settings.textField],
              isDisabled: firstItem[this._settings.disabledField]
            })];
          }
        } catch (e) {
        }
      } else {
        const _data = value.map((item) => typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
          id: item[this._settings.idField],
          text: item[this._settings.textField],
          isDisabled: item[this._settings.disabledField]
        }));
        if (this._settings.limitSelection > 0) {
          this.selectedItems = _data.splice(0, this._settings.limitSelection);
        } else {
          this.selectedItems = _data;
        }
      }
    } else {
      this.selectedItems = [];
    }
    this.onChangeCallback(value);
    this.cdr.markForCheck();
  }
  // From ControlValueAccessor interface
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  // From ControlValueAccessor interface
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  // Set touched on blur
  onTouched() {
    this.onTouchedCallback();
  }
  trackByFn(index, item) {
    return item.id;
  }
  isSelected(clickedItem) {
    let found = false;
    this.selectedItems.forEach((item) => {
      if (clickedItem.id === item.id) {
        found = true;
      }
    });
    return found;
  }
  isLimitSelectionReached() {
    return this._settings.limitSelection === this.selectedItems.length;
  }
  isAllItemsSelected() {
    let filteredItems = this.listFilterPipe.transform(this._data, this.filter);
    const itemDisabledCount = filteredItems.filter((item) => item.isDisabled).length;
    if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
      return false;
    }
    return filteredItems.length === this.selectedItems.length + itemDisabledCount;
  }
  showButton() {
    if (!this._settings.singleSelection) {
      if (this._settings.limitSelection > 0) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  itemShowRemaining() {
    return this.selectedItems.length - this._settings.itemsShowLimit;
  }
  addSelected(item) {
    if (this._settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
    } else {
      this.selectedItems.push(item);
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onSelect.emit(this.emittedValue(item));
  }
  removeSelected(itemSel) {
    this.selectedItems.forEach((item) => {
      if (itemSel.id === item.id) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onDeSelect.emit(this.emittedValue(itemSel));
  }
  emittedValue(val) {
    const selected = [];
    if (Array.isArray(val)) {
      val.map((item) => {
        selected.push(this.objectify(item));
      });
    } else {
      if (val) {
        return this.objectify(val);
      }
    }
    return selected;
  }
  objectify(val) {
    if (this._sourceDataType === "object") {
      const obj = {};
      obj[this._settings.idField] = val.id;
      obj[this._settings.textField] = val.text;
      if (this._sourceDataFields.includes(this._settings.disabledField)) {
        obj[this._settings.disabledField] = val.isDisabled;
      }
      return obj;
    }
    if (this._sourceDataType === "number") {
      return Number(val.id);
    } else {
      return val.text;
    }
  }
  toggleDropdown(evt) {
    evt.preventDefault();
    if (this.disabled && this._settings.singleSelection) {
      return;
    }
    this._settings.defaultOpen = !this._settings.defaultOpen;
    if (!this._settings.defaultOpen) {
      this.onDropDownClose.emit();
    }
  }
  closeDropdown() {
    this._settings.defaultOpen = false;
    if (this._settings.clearSearchFilter) {
      this.filter.text = "";
    }
    this.onDropDownClose.emit();
  }
  toggleSelectAll() {
    if (this.disabled) {
      return false;
    }
    if (!this.isAllItemsSelected()) {
      this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter((item) => !item.isDisabled).slice();
      this.onSelectAll.emit(this.emittedValue(this.selectedItems));
    } else {
      this.selectedItems = [];
      this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
  }
  getFields(inputData) {
    const fields = [];
    if (typeof inputData !== "object") {
      return fields;
    }
    for (const prop in inputData) {
      fields.push(prop);
    }
    return fields;
  }
  static ɵfac = function MultiSelectComponent_Factory(t) {
    return new (t || _MultiSelectComponent)(ɵɵdirectiveInject(ListFilterPipe), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MultiSelectComponent,
    selectors: [["ng-multiselect-dropdown"]],
    hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("blur", function MultiSelectComponent_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      placeholder: "placeholder",
      disabled: "disabled",
      settings: "settings",
      data: "data"
    },
    outputs: {
      onFilterChange: "onFilterChange",
      onDropDownClose: "onDropDownClose",
      onSelect: "onSelect",
      onDeSelect: "onDeSelect",
      onSelectAll: "onSelectAll",
      onDeSelectAll: "onDeSelectAll"
    },
    features: [ɵɵProvidersFeature([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
    decls: 18,
    vars: 23,
    consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px", 3, "ngClass"], ["style", "padding-right: 15px;", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-filtered-data", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item-container"], [1, "selected-item", 3, "hidden"], [2, "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "15px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-filtered-data"], [1, "no-data"]],
    template: function MultiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
          return ctx.onTouched();
        })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
          return ctx.closeDropdown();
        });
        ɵɵelementStart(1, "div")(2, "span", 1);
        ɵɵlistener("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
          return ctx.toggleDropdown($event);
        });
        ɵɵtemplate(3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2)(4, MultiSelectComponent_span_4_Template, 6, 2, "span", 3);
        ɵɵelementStart(5, "span", 4);
        ɵɵtemplate(6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        ɵɵelement(7, "span", 6);
        ɵɵelementEnd()()();
        ɵɵelementStart(8, "div", 7)(9, "ul", 8);
        ɵɵtemplate(10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9)(11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        ɵɵelementEnd();
        ɵɵelementStart(12, "ul", 11);
        ɵɵtemplate(13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);
        ɵɵpipe(14, "multiSelectFilter");
        ɵɵtemplate(15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        ɵɵpipe(16, "multiSelectFilter");
        ɵɵtemplate(17, MultiSelectComponent_li_17_Template, 3, 1, "li", 14);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.selectedItems.length == 0);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction1(21, _c0, ctx._settings.defaultOpen));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemShowRemaining() > 0);
        ɵɵadvance(2);
        ɵɵproperty("hidden", !ctx._settings.defaultOpen);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        ɵɵadvance();
        ɵɵstyleProp("max-height", ctx._settings.maxHeight + "px");
        ɵɵadvance();
        ɵɵproperty("ngForOf", ɵɵpipeBind2(14, 15, ctx._data, ctx.filter));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx._data.length != 0 && ɵɵpipeBind2(16, 18, ctx._data, ctx.filter).length == 0 && !ctx._settings.allowRemoteDataSearch);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ClickOutsideDirective, ListFilterPipe],
    styles: ['.multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]{display:flex;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;max-width:100px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0 8px;border-color:#999999 transparent;content:""}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotate(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0px;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:"";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{transform:rotate(-45deg) scale(1)}@keyframes _ngcontent-%COMP%_borderscale{50%{box-shadow:0 0 0 2px #337ab7}}'],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectComponent, [{
    type: Component,
    args: [{
      selector: "ng-multiselect-dropdown",
      providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div tabindex="0" (blur)="onTouched()" class="multiselect-dropdown" (clickOutside)="closeDropdown()">
  <div [class.disabled]="disabled">
    <span tabindex="-1" class="dropdown-btn" (click)="toggleDropdown($event)">
      <span *ngIf="selectedItems.length == 0">{{_placeholder}}</span>
      <span *ngFor="let item of selectedItems; trackBy: trackByFn;let k = index" class="selected-item-container" >
        <span class="selected-item"  [hidden]="k  > (this._settings.itemsShowLimit-1)">
          <span >{{item.text}}&nbsp;</span>
          <a style="padding-left:2px;color:white" (click)="onItemClick($event,item)">x</a>
        </span>
       
      </span>
      <span [ngClass]="{ 'dropdown-multiselect--active': _settings.defaultOpen }" style="float:right !important;padding-right:4px">
        <span style="padding-right: 15px;" *ngIf="itemShowRemaining()>0">+{{itemShowRemaining()}}</span>
        <span class="dropdown-multiselect__caret"></span>
      </span>
    </span>
  </div>
  <div class="dropdown-list" [hidden]="!_settings.defaultOpen">
    <ul class="item1">
      <li (click)="toggleSelectAll()" *ngIf="(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1" class="multiselect-item-checkbox" style="border-bottom: 1px solid #ccc;padding:10px">
        <input type="checkbox" aria-label="multiselect-select-all" [checked]="isAllItemsSelected()" [disabled]="disabled || isLimitSelectionReached()" />
        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>
      </li>
      <li class="filter-textbox" *ngIf="(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter">
        <input type="text" aria-label="multiselect-search" [readOnly]="disabled" [placeholder]="_settings.searchPlaceholderText" [(ngModel)]="filter.text" (ngModelChange)="onFilterTextChange($event)">
      </li>
    </ul>
    <ul class="item2" [style.maxHeight]="_settings.maxHeight+'px'">
      <li *ngFor="let item of _data | multiSelectFilter:filter; let i = index;" (click)="onItemClick($event,item)" class="multiselect-item-checkbox">
        <input type="checkbox" [attr.aria-label]="item.text" [checked]="isSelected(item)" [disabled]="disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled" />
        <div>{{item.text}}</div>
      </li>
      <li class='no-filtered-data' *ngIf="_data.length != 0 && (_data | multiSelectFilter:filter).length == 0 && !_settings.allowRemoteDataSearch">
        <h5>{{_settings.noFilteredDataAvailablePlaceholderText}}</h5>
      </li>
      <li class='no-data' *ngIf="_data.length == 0 && !_settings.allowRemoteDataSearch">
        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>
      </li>
    </ul>
  </div>
</div>
`,
      styles: ['.multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item-container{display:flex;float:left}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;max-width:100px}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item span{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0 8px;border-color:#999999 transparent;content:""}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotate(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0px;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:none}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:"";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]+div:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:"";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{animation:borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{transform:rotate(-45deg) scale(1)}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}\n']
    }]
  }], function() {
    return [{
      type: ListFilterPipe
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    placeholder: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    settings: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    onFilterChange: [{
      type: Output,
      args: ["onFilterChange"]
    }],
    onDropDownClose: [{
      type: Output,
      args: ["onDropDownClose"]
    }],
    onSelect: [{
      type: Output,
      args: ["onSelect"]
    }],
    onDeSelect: [{
      type: Output,
      args: ["onDeSelect"]
    }],
    onSelectAll: [{
      type: Output,
      args: ["onSelectAll"]
    }],
    onDeSelectAll: [{
      type: Output,
      args: ["onDeSelectAll"]
    }],
    onTouched: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var NgMultiSelectDropDownModule = class _NgMultiSelectDropDownModule {
  static forRoot() {
    return {
      ngModule: _NgMultiSelectDropDownModule
    };
  }
  static ɵfac = function NgMultiSelectDropDownModule_Factory(t) {
    return new (t || _NgMultiSelectDropDownModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgMultiSelectDropDownModule,
    declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
    imports: [CommonModule, FormsModule],
    exports: [MultiSelectComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ListFilterPipe],
    imports: [CommonModule, FormsModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgMultiSelectDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
      providers: [ListFilterPipe],
      exports: [MultiSelectComponent]
    }]
  }], null, null);
})();
export {
  MultiSelectComponent,
  NgMultiSelectDropDownModule
};
//# sourceMappingURL=ng-multiselect-dropdown.js.map
