import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { observer } from 'mobx-react-lite';

import { useUploadStore } from 'core/RootStoreProvider';

import dragUpload from 'assets/images/png/dragUpload.svg';
import yes from 'assets/images/png/yes.svg';

import axios from 'axios';
import styles from './styles.scss';

const Upload = observer(() => {
	const uploadStore = useUploadStore();

	const [load, setLoad] = useState<null | number>(null);
	const [preFile, setPreFile] = useState<any>(null);

	const { getRootProps, getInputProps } = useDropzone({
		multiple: false,
		accept: 'text/csv',
		onDrop: (acceptedFiles) => {
			setPreFile(acceptedFiles[0]);
			const config = {
				onUploadProgress(progressEvent: any) {
					setLoad(Math.round((progressEvent.loaded * 100) / progressEvent.total));
				},
			};

			const data = new FormData();
			data.append('table', acceptedFiles[0]);

			axios
				.post('/upload', data, config)
				.then(() => uploadStore.upload(acceptedFiles[0]))
				.finally(() => setLoad(null));
		},
	});

	return (
		<div className={styles.wrap}>
			<div style={{ width: '400px' }}>
				<section className={styles.dropZone}>
					<div {...getRootProps({ className: 'dropzone' })}>
						<input {...getInputProps()} />
						<div className={styles.dragIcon}>
							<img src={dragUpload} alt="" />
							<p className={styles.dropZoneText}>Drag & drop or browse file to upload</p>
						</div>
					</div>
				</section>

				<div style={{ marginTop: '35px' }}>
					{load && (
						<div className={styles.fileWrap}>
							<p className={styles.fileTitle}>{preFile.name}</p>

							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className={styles.p}>
									<div style={{ width: `${load}%` }} />
									<div />
								</div>

								<p className={styles.close} style={{ marginLeft: '12px' }}>
									X
								</p>
							</div>
						</div>
					)}

					{uploadStore.uploadedFiles.map((file: any) => (
						<div key={file.name} className={styles.fileWrap}>
							<p className={styles.fileTitle}>{file.name}</p>

							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className={styles.success} />

								<img src={yes} alt="" style={{ marginLeft: '12px' }} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

export default Upload;
