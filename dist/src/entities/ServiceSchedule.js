"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchedule = void 0;
class ServiceSchedule {
    constructor(props, service_schedule_id) {
        Object.assign(this, props);
        if (service_schedule_id) {
            this.service_schedule_id = service_schedule_id;
        }
    }
}
exports.ServiceSchedule = ServiceSchedule;
