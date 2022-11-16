<script setup lang="ts">
import { h } from 'vue';
import { atcb_init, atcb_destroy } from 'add-to-calendar-button';
// we load styles dynamically from jsDelivr. If you require to use an internal one, uncomment the next line
//import 'add-to-calendar-button/assets/css/atcb.css';
</script>

<script lang="ts">
let initializedButtons: string[] = [];
export default {
  name: "add-to-calendar-button",
  props: {
    proKey: String,
    name: String,
    dates: Array,
    description: String,
    startDate: String,
    startTime: String,
    endDate: String,
    endTime: String,
    timeZone: String,
    location: String,
    status: String,
    sequence: Number,
    uid: String,
    organizer: String,
    icsFile: String,
    images: Array,
    recurrence: String,
    recurrence_interval: Number,
    recurrence_until: String,
    recurrence_count: String,
    recurrence_byDay: String,
    recurrence_byMonth: String,
    recurrence_byMonthDay: String,
    recurrence_weekstart: String,
    availability: String,
    created: String,
    updated: String,
    identifier: String,
    subscribe: String,
    options: Array,
    iCalFileName: String,
    listStyle: String,
    buttonStyle: String,
    trigger: String,
    icons: String,
    textLabels: String,
    buttonsList: String,
    background: String,
    checkmark: String,
    branding: String,
    size: String,
    label: String,
    ty: Object,
    rsvp: Object,
    inlineRsvp: String,
    customLabels: Object,
    customCss: String,
    lightMode: String,
    language: String,
    richData: String,
    bypassWebViewCheck: String
  },
  data() {
    return {
      instance: 1
    }
  },
  methods: {
    // changing style dynamically, by loading a respective one from jsDelivr (mind that this could be a problem, if external css gets blocked due to CSP or other security measures!)
    // TODO: Better option would be to load the local css into variables and set a <style> element to the <head> depending on the selected one
    setStyle() {
      let StylesheetUrl = 'https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb.min.css';
      if (this.buttonStyle != null && this.buttonStyle != '' && this.buttonStyle != 'default') {
        StylesheetUrl = 'https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb-' + this.buttonStyle + '.min.css';
      }
      const existingStyleFile = document.getElementById('atcb-style-file');
      if (existingStyleFile != null) {
        existingStyleFile.remove();
      }
      let styleFile = document.createElement('link');
      styleFile.rel = 'stylesheet';
      styleFile.href = StylesheetUrl;
      styleFile.id = 'atcb-style-file';
      document.head.appendChild(styleFile);
    }
  },
  render() {
    let jsonContent: string = JSON.stringify({
        "proKey": this.proKey,
        "name": this.name,
        "dates": this.dates,
        "description": this.description,
        "startDate": this.startDate,
        "startTime": this.startTime,
        "endDate": this.endDate,
        "endTime": this.endTime,
        "timeZone": this.timeZone,
        "location": this.location,
        "status": this.status,
        "sequence": this.sequence,
        "uid": this.uid,
        "organizer": this.organizer,
        "icsFile": this.icsFile,
        "images": this.images,
        "recurrence": this.recurrence,
        "recurrence_interval": this.recurrence_interval,
        "recurrence_until": this.recurrence_until,
        "recurrence_count": this.recurrence_count,
        "recurrence_byDay": this.recurrence_byDay,
        "recurrence_byMonth": this.recurrence_byMonth,
        "recurrence_byMonthDay": this.recurrence_byMonthDay,
        "recurrence_weekstart": this.recurrence_weekstart,
        "availability": this.availability,
        "created": this.created,
        "updated": this.updated,
        "identifier": this.identifier,
        "subscribe": this.subscribe,
        "options": this.options,
        "iCalFileName": this.iCalFileName,
        "listStyle": this.listStyle,
        "buttonStyle": this.buttonStyle,
        "trigger": this.trigger,
        "icons": this.icons,
        "textLabels": this.textLabels,
        "buttonsList": this.buttonsList,
        "background": this.background,
        "checkmark": this.checkmark,
        "branding": this.branding,
        "size": this.size,
        "label": this.label,
        "ty": this.ty,
        "rsvp": this.rsvp,
        "inlineRsvp": this.inlineRsvp,
        "customLabels": this.customLabels,
        "customCss": this.customCss,
        "lightMode": this.lightMode,
        "language": this.language,
        "richData": this.richData,
        "bypassWebViewCheck": this.bypassWebViewCheck
      });
    return h('div', {'.:key': 'instance', innerHTML: '<div class="atcb" style="display:none;">' + jsonContent + '</div>'
    });
  },
  mounted() {
    this.setStyle();
    initializedButtons = atcb_init();
  },
  beforeUpdate() {
    if (initializedButtons[0] != null && document.getElementById(initializedButtons[0]) != null) {
      // destorying the whole calendar to remove any fragments (even outside the component)
      atcb_destroy(initializedButtons[0]);
      // reloading the whole component to get the original setup for re-initialization
      this.setStyle();
      this.instance++;
    }
  },
  updated() {
    initializedButtons = atcb_init();
  }
}
</script>
