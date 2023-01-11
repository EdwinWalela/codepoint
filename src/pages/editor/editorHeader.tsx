const EditorHeader =
	() => {
		return (
			<div className="md:flow-root">
				<ul className="bg-gray-500 shadow-md">
					<li className="inline-block py-2 px-5 bg-black text-white cursor-pointer">
						myfile.py
					</li>
					<li className="inline-block md:float-right py-2 px-5 bg-black text-white cursor-pointer">
						Export
					</li>
					<li className="inline-block md:float-right py-2 px-5 bg-green-500 text-white cursor-pointer">
						Execute
					</li>
				</ul>
			</div>
		);
	};

export default EditorHeader;
