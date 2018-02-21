import Analytics from "appcenter-analytics";

export default function logIt(eventName: string, properties: Object) {
  Analytics.trackEvent(eventName, properties);
}
