import ModelEditor from "./ui/ModelEditor";

const params = [
    {
        id: 1,
        name: "Назначение"
    },
    {
        id: 2,
        name: "Длина"
    }
]

const model = {
    paramValues: [
        {
            paramId: 1,
            value:  "Повседневное"
        },
        {
            paramId: 2,
            value:  "Макси"
        }
    ]
}

export default function Home() {
    return (
      <ModelEditor/>
    );
}