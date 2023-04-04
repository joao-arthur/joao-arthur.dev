import { Progress } from "./Progress";

type props = {
    readonly name: string;
    readonly level: 'HELLO_WORLD' | 'BASICS' | 'INTERMEDIATE' | 'ADVANCED';
}

export function TechInfo({ name, level }: props) {
    function description() {
        switch (level) {
            case 'HELLO_WORLD': return 'hello world';
            case 'BASICS': return 'basics';
            case 'INTERMEDIATE': return 'intermediate';
            case 'ADVANCED': return 'advanced';
        }
    }

    function percentual() {
        switch (level) {
            case 'HELLO_WORLD': return 25;
            case 'BASICS': return 50;
            case 'INTERMEDIATE': return 75;
            case 'ADVANCED': return 100;
        }
    }

    return (
        <>
            <span style={{ flex: '1 1 0', minWidth: 80 }}>{name}</span>
            <span style={{ flex: '1 1 0', minWidth: 100 }}>{description()}</span>
            <div style={{ flex: '4 1 0', minWidth: 0 }}>
                <Progress percentual={percentual()} />
            </div>
        </>
    )
}
