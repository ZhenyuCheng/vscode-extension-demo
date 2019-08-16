import * as vscode from 'vscode';

class TestCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        Thenable<vscode.CompletionItem[]> {

        // 找到分割符前面的单词
        let temp, range, text, i = 0;
        while (!range) {
            i--;
            temp = position.translate(0, i); //增量查找position
            range = document.getWordRangeAtPosition(temp);
            text = document.getText(range);
        }

        if (text === 'a') {
            let completionItems = [];
            let completionItem = new vscode.CompletionItem("aaa");
            completionItem.kind = vscode.CompletionItemKind.Class; // 提示的类型，即展示图标
            completionItem.detail = "aaa"; // 详情，没有label的时候列表展示detail
            completionItem.documentation = "222";// 文档说明
            // completionItem.label= "test"; // 展示的文本,有则展示，无则展示detail
            completionItem.insertText = new vscode.SnippetString("aaaa$1bbbb$2cccc"); // 实际插入的文本，可以是一个符合Snippet对象
            // 还有一些排序相关的字段这里不一一展开说明
            completionItems.push(completionItem);
            return Promise.resolve(completionItems);
        }
        return Promise.resolve([]);
    }
}
export default TestCompletionItemProvider;