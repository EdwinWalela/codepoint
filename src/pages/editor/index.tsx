import CollaboratorMenu from './collaboratorMenu';
import Editor from './editor';
import Terminal from './terminal';

const EditorPage = () => {
	return (
		<div className="md:flow-root md:p-14">
			<div className="md:w-2/3 md:float-left">
				<Editor />
				<Terminal />
			</div>
			<CollaboratorMenu />
		</div>
	);
};

export default EditorPage;
