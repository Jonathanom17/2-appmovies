import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Injectable({providedIn: 'root'})

export class ModalService {
    private readonly _dialogo= inject(MatDialog);

    constructor() { }

    openModal<CT,T>(compentRef: ComponentType<CT>, _data?: T):void{
       
        this._dialogo.open(compentRef, {
            data:_data,
            width:'500px',
             
        });

    }

    closeModal():void{
        this._dialogo.closeAll();
    }
    
}