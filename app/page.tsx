
// 'use client';

// import { useState, useRef, ChangeEvent } from 'react';
// import JSZip from 'jszip';
// import styles from '../styles/Home.module.css';

// type Label = string;
// type Annotations = Record<string, Label>;

// const PRESET_LABELS: Label[] = ['噪音', '人声', '音乐', '安静'];

// export default function HomePage() {
//   const [audioFiles, setAudioFiles] = useState<File[]>([]);
//   const [currentFileIndex, setCurrentFileIndex] = useState<number | null>(null);
//   const [annotations, setAnnotations] = useState<Annotations>({});
//   const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
//   const audioPlayerRef = useRef<HTMLAudioElement>(null);

//   const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const zip = new JSZip();
//     const contents = await zip.loadAsync(file);
//     const audioFilePromises: Promise<File>[] = [];

//     contents.forEach((relativePath, zipEntry) => {
//       if (!zipEntry.dir && (zipEntry.name.endsWith('.wav') || zipEntry.name.endsWith('.mp3'))) {
//         const promise = zipEntry.async('blob').then(blob => {
//             const audioBlob = new Blob([blob], { type: 'audio/mpeg' });
//             return new File([audioBlob], zipEntry.name);
//         });
//         audioFilePromises.push(promise);
//       }
//     });
    
//     const extractedFiles = await Promise.all(audioFilePromises);
//     setAudioFiles(extractedFiles);
//     selectFile(0, extractedFiles[0]);
//   };

//   const selectFile = (index: number, file: File) => {
//     setCurrentFileIndex(index);
//     if (currentAudioUrl) {
//       URL.revokeObjectURL(currentAudioUrl);
//     }
//     const url = URL.createObjectURL(file);
//     setCurrentAudioUrl(url);
//     if(audioPlayerRef.current) {
//         audioPlayerRef.current.load();
//     }
//   };
  
//   const handleLabelSelect = (label: Label) => {
//     if (currentFileIndex === null) return;
//     const currentFileName = audioFiles[currentFileIndex].name;
//     const newAnnotations = { ...annotations, [currentFileName]: label };
//     setAnnotations(newAnnotations);
    
//     const nextIndex = audioFiles.findIndex((file, index) => index > currentFileIndex && !newAnnotations[file.name]);
//     if (nextIndex !== -1) {
//       selectFile(nextIndex, audioFiles[nextIndex]);
//     } else {
//         const firstUnlabeled = audioFiles.findIndex(file => !newAnnotations[file.name]);
//         if (firstUnlabeled !== -1) {
//             selectFile(firstUnlabeled, audioFiles[firstUnlabeled]);
//         } else {
//             alert("恭喜，所有文件都已标注！");
//         }
//     }
//   };

//   const exportAnnotations = () => {
//     const dataStr = JSON.stringify(annotations, null, 2);
//     const dataBlob = new Blob([dataStr], { type: 'application/json' });
//     const url = URL.createObjectURL(dataBlob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'annotations.json';
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className={styles.container}>
//       <aside className={styles.sidebar}>
//         <div className={styles.sidebarHeader}>
//           <h2>音频文件</h2>
//           <label htmlFor="file-upload" className={styles.fileInputLabel}>上传 .zip 包</label>
//           <input id="file-upload" type="file" accept=".zip" onChange={handleFileUpload} className={styles.fileInput} />
//         </div>
//         <ul className={styles.fileList}>
//           {audioFiles.map((file, index) => (
//             <li 
//               key={index} 
//               onClick={() => selectFile(index, file)}
//               className={`${styles.fileListItem} ${currentFileIndex === index ? styles.fileListItemActive : ''}`}
//             >
//               <span>{file.name}</span>
//               {annotations[file.name] && <span className={styles.doneMark}>✓</span>}
//             </li>
//           ))}
//         </ul>
//       </aside>
      
//       <main className={styles.mainContent}>
//         {currentAudioUrl ? (
//           <>
//             <div className={styles.playerContainer}>
//               <h3>{audioFiles[currentFileIndex!]?.name}</h3>
//               <audio ref={audioPlayerRef} controls autoPlay src={currentAudioUrl} className={styles.audioPlayer}>
//                 Your browser does not support the audio element.
//               </audio>
//               <div className={styles.labelContainer}>
//                 <h4>选择标签</h4>
//                 {PRESET_LABELS.map(label => (
//                   <button 
//                     key={label}
//                     onClick={() => handleLabelSelect(label)}
//                     className={styles.labelButton}
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <button onClick={exportAnnotations} disabled={Object.keys(annotations).length === 0} className={styles.exportButton}>
//               导出标注结果 (JSON)
//             </button>
//           </>
//         ) : (
//           <div className={styles.placeholder}>
//             <h1>音频标注平台</h1>
//             <p>请从左侧上传一个包含音频文件的zip包以开始工作。</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// app/page.tsx

export default function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>If you can see this, the deployment is working.</p>
      <p>如果能看到这些文字，代表部署基本成功。</p>
    </div>
  );
}