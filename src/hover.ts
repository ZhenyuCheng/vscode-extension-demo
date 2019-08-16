import { HoverProvider, TextDocument, Position, CancellationToken, Hover, CompletionItem } from "vscode";

class TestHover implements HoverProvider {
    public provideHover(
        document: TextDocument, position: Position, token: CancellationToken):
        Thenable<Hover> {
        let range = document.getWordRangeAtPosition(position);
        let text = document.getText(range);

        console.log(text);
        if (text === 'a') {
            let hover = new Hover(['aaaaa','bbb']);
            return Promise.resolve(hover);
        } else {
            return Promise.resolve(new Hover('没有内容'));
        }

    }
}

export default TestHover;