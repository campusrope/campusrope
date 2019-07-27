import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import {
  EntityAction,
  EntityCacheAction,
  ofEntityOp,
  OP_ERROR,
  OP_SUCCESS
} from "@ngrx/data";
import { filter } from "rxjs/operators";
import { NotificationService } from "./notifications/notification.service";

@Injectable({ providedIn: "root" })
export class NgrxDataToastService {
  constructor(actions$: Actions, private toast: NotificationService) {
    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) =>
            ea.payload.entityOp.endsWith(OP_SUCCESS) ||
            ea.payload.entityOp.endsWith(OP_ERROR)
        )
      )
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        this.toast.default(`${action.payload.entityName} action`)
      );
    actions$
      .pipe(
        ofType(
          EntityCacheAction.SAVE_ENTITIES_SUCCESS,
          EntityCacheAction.SAVE_ENTITIES_ERROR
        )
      )
      .subscribe((action: any) =>
        this.toast.default(`${action.payload.entityName} action`)
      );
  }
}
