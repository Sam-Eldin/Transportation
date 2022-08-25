import {ICellEditorComp, ICellEditorParams} from "ag-grid-community";
import {Status} from "../common/order.interface";

export class StatusEditor implements ICellEditorComp {
  defaultImgStyle: string;
  selectedImgStyle: string;
  status!: Status;
  container: any;
  pending: any;
  accept: any;
  reject: any;

  constructor() {
    this.defaultImgStyle =
      'padding-left:10px; padding-right:10px;  border: 1px solid transparent; padding: 4px;';
    this.selectedImgStyle =
      'padding-left:10px; padding-right:10px; border: 1px solid lightgreen; padding: 4px;';
  }

  onKeyDown(event: any) {
    const key = event.key;
    if (
      key === 'ArrowLeft' || // left
      key === 'ArrowRight'
    ) {
      // right
      // this.toggleMood();
      event.stopPropagation();
    }
  }

  // toggleMood() {
  //   this.selectMood(this.mood === 'Happy' ? 'Sad' : 'Happy');
  // }

  init(params: ICellEditorParams) {
    this.container = document.createElement('div');
    // this.container.style =
    //   'border-radius: 15px; border: 1px solid grey;background: #e6e6e6;padding: 15px; text-align:center;display:inline-block;outline:none';
    this.container.tabIndex = '0'; // to allow the div to capture keypresses

    // <span><i class="material-icons" style="color: #1c52dc">hourglass_full</i></span>
    // this.pending = document.createElement('span');
    // const innerTag = document.createElement("i");
    // innerTag.className = 'material-icons';
    // innerTag.style.color = '#1c52dc';
    // innerTag.innerHTML = 'hourglass_full';
    // this.pending.appendChild(innerTag);

    this.accept = document.createElement('span');
    const innerTag2 = document.createElement("i");
    innerTag2.className = 'material-icons';
    innerTag2.style.color = '#0b8903';
    innerTag2.style.margin = '6px';
    innerTag2.innerHTML = 'check_circle';
    this.accept.appendChild(innerTag2);


    this.reject = document.createElement('span');
    const innerTag3 = document.createElement("i");
    innerTag3.className = 'material-icons';
    innerTag3.style.color = '#ff1111';
    innerTag3.style.margin = '6px';
    innerTag3.innerHTML = 'cancel';
    this.reject.appendChild(innerTag3);

    // this.container.appendChild(this.pending);
    this.container.appendChild(this.accept);
    this.container.appendChild(this.reject);

    // this.pending.addEventListener('click', () => {
    //   this.selectMood(Status.pending);
    //   params.stopEditing();
    // });
    this.accept.addEventListener('click', () => {
      this.selectMood(Status.accepted);
      params.stopEditing();
    });
    this.reject.addEventListener('click', () => {
      this.selectMood(Status.rejected);
      params.stopEditing();
    });

    this.container.addEventListener('keydown', (event: any) => {
      this.onKeyDown(event);
    });

    this.selectMood(params.value);
  }

  selectMood(mood: Status) {
    this.status = mood;
    // this.reject.style =
    //   mood === 'Happy' ? this.selectedImgStyle : this.defaultImgStyle;
    // this.accept.style =
    //   mood === 'Sad' ? this.selectedImgStyle : this.defaultImgStyle;
  }

  // gets called once when grid ready to insert the element
  getGui() {
    return this.container;
  }

  afterGuiAttached() {
    this.container.focus();
  }

  getValue() {
    return this.status;
  }

  // any cleanup we need to be done here
  destroy() {
  }

  isPopup() {
    return true;
  }
}
