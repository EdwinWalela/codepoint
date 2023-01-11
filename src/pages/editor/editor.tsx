import CodeLine from './codeLine';
import EditorHeader from './editorHeader';

const Editor =
	() => {
		return (
			<div className="w-full bg-white shadow-lg h-80  overflow-hidden">
				<EditorHeader />
				<div className="mt-6 overflow-y-scroll h-full overflow-x-hidden">
					<CodeLine
						lineNumber={
							1
						}
						value={`def hello_world():`}
					/>
					<CodeLine
						lineNumber={
							2
						}
						value={`\tprint('Hello World')`}
					/>
					<CodeLine
						lineNumber={
							3
						}
						value={``}
					/>
					<CodeLine
						lineNumber={
							4
						}
						value={``}
					/>
					<CodeLine
						lineNumber={
							5
						}
						value={``}
					/>
				</div>
			</div>
		);
	};

export default Editor;
