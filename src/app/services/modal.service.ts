import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Injectable({providedIn: 'root'})

export class ModalService {
    private readonly _dialogo= inject(MatDialog);

    constructor() { }

    openModal<CT,T>(compentRef: ComponentType<CT>, data?: T, isEditing=false):void{
        const config = {data, isEditing}
        this._dialogo.open(compentRef, {
            data:config,
            width:'12000px'
        });

    }

    closeModal():void{
        this._dialogo.closeAll();
    }
    
}