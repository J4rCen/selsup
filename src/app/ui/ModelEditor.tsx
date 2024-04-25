"use client"
import { useState } from "react";
import "./style.css"

interface Param {
    id: number;
    name: string;
}

interface ParamValue {
    paramId: number;
    value:  string;
}

interface Model {
    paramValues: ParamValue[];
}

const params: Param[] = [
    {
        id: 1,
        name: "Назначение"
    },
    {
        id: 2,
        name: "Длина"
    },
    {
        id: 3,
        name: "Ширина"
    }
]

const model: Model = {
    paramValues: [
        {
            paramId: 1,
            value:  "Повседневное"
        },
        {
            paramId: 2,
            value:  "Макси"
        },
        {
            paramId: 3,
            value:  "Макси"
        }
    ]
}

export default function ModelEditor() {

    const [viewModel, setViewModel] = useState(false)

    function getModel() {
        return model.paramValues.map((el, index) => {
            return (
                <div className="ModelEditor__params" key={index}>
                    <p>{params[index].name}</p>
                    {
                        viewModel 
                        ? <input type="text" id={`${el.paramId}`} name={`${el.paramId}`} defaultValue={el.value}/>
                        : <p>{el.value}</p>
                    }
                </div>
            )
        })
    }

    function setValue(formDate: any) {
        for(const el of model.paramValues) {
            if(el.value !== formDate.get(el.paramId)) {
                model.paramValues[el.paramId - 1] = {
                    paramId: el.paramId,
                    value: formDate.get(el.paramId)
                }
            }
        }
    }

    return (
        <div className="ModelEditor">
            {
                viewModel
                ? <form action={setValue} >
                        {
                            getModel()
                        }
                        <input type="submit" value="Изменить" />
                </form>
                : <div>
                    {
                        getModel()
                    }
                </div>
            }
            <button onClick={() => setViewModel(!viewModel)}>{viewModel ? "Просмотреть модель" : "Редактировать модель"}</button>
        </div>
    )
}