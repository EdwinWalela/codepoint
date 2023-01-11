const CodeLine =
	(props: {
		lineNumber: number;
		value: string;
	}) => {
		return (
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<span className="">
						{
							props.lineNumber
						}
					</span>
				</div>
				<input
					type="text"
					className="w-full pl-10 focus:outline-none focus:bg-gray-200"
					value={
						props.value
					}
				/>
			</div>
		);
	};

export default CodeLine;
