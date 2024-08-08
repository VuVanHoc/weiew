"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function EditorComponent({
	value,
	onChange,
}: {
	value: string;
	onChange: (value: string) => void;
}) {
	const editorRef = useRef(null);
	return (
		<Editor
			value={value}
			onEditorChange={(value) => onChange(value)}
			tinymceScriptSrc="/tinymce/tinymce.min.js"
			licenseKey="gpl"
			onInit={(_evt, editor: any) => (editorRef.current = editor)}
			init={{
				height: 600,
				menubar: true,
				plugins: [
					"advlist",
					"autolink",
					"lists",
					"link",
					"image",
					"charmap",
					"anchor",
					"searchreplace",
					"visualblocks",
					"code",
					"fullscreen",
					"insertdatetime",
					"media",
					"table",
					"preview",
					"help",
					"wordcount",
				],
				toolbar:
					"undo redo | blocks | " +
					"bold italic forecolor | alignleft aligncenter " +
					"alignright alignjustify | bullist numlist outdent indent | " +
					"removeformat | help",
				content_style:
					"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
			}}
		/>
	);
}
