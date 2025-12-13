// cl
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Import all your JSON files
// import projects_main from './projects_main.json';
// import projects_library from './projects_library.json';

// 2025-12-11 Thursday 15:45:59.Try this instead:
// import projects from '@site/src/data/projects-v02.json';
import projects_library from '@site/src/data/projects-library.json';
import projects_main from '@site/src/data/projects-main.json';

import projects_toolkit from '@site/src/data/projects-toolkit.json';
import projects_inspector from '@site/src/data/projects-inspector.json';
import projects_other from '@site/src/data/projects-other.json';

// Add more imports as needed

export default function ProjectGrids() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    // Define your data sources with titles
    const projectSources = [
        { title: 'Main Projects', data: projects_main },
        { title: 'Library Projects', data: projects_library },
        { title: 'Toolkit Projects', data: projects_toolkit },
        { title: 'Inspector Projects', data: projects_inspector },
        { title: 'Other Projects', data: projects_other },
        // Add more sources here
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    // Close modal on Escape key
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setSelectedProject(null);
                // 2025-12-11 Thursday 18:04:12.No longer used right?
                // setActiveTab('overview');
            }
        }
        if (selectedProject) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    // 2025-12-12 Friday 12:15:54.  Add tooltip to card and modal.
    function DescriptionWithTooltip({ text }) {
        const descRef = React.useRef(null);
        const [showTooltip, setShowTooltip] = React.useState(false);

        React.useEffect(() => {
            const el = descRef.current;
            if (el) {
                // check if content is overflowing its container
                setShowTooltip(
                    el.scrollHeight > el.clientHeight ||
                        el.scrollWidth > el.clientWidth
                );
            }
        }, [text]);

        return (
            // <div className={styles.toolDescriptionWrapper}>
            <div className={styles.projectDescriptionWrapper}>
                <div
                    ref={descRef}
                    // className={`${styles.toolDescription} ${styles.multiline}`}
                    className={`${styles.projectDescription} ${styles.multiline}`}
                >
                    {text}
                </div>
                {showTooltip && <div className={styles.tooltip}>{text}</div>}
            </div>
        );
    }

    return (
        // <div className={styles.projectGridWrapper}>
        <div className={styles.projectGridWrapper01}>
            {/* Iterate through each data source */}
            {projectSources.map((source, sourceIdx) => (
                <div key={sourceIdx} className={styles.gridSection}>
                    {/* Optional: Add a heading for each grid */}
                    {/* <div><h2 className={styles.sectionTitle}>{source.title}</h2></div> */}
                    <div className={styles.sectionTitle}>
                        <h2>{source.title}</h2>
                    </div>

                    <div className={styles.sectionIntro}>[intro]</div>

                    {/* <div className={styles.projectGridContainer}> */}
                    <div className={styles.projectGridContainer01}>
                        <div className={styles.projectGrid}>
                            {source.data.map((project, idx) => (
                                <div
                                    key={idx}
                                    className={styles.projectCard}
                                    onClick={() => openModal(project)}
                                >
                                    <div>
                                        <div className={styles.topRow}>
                                            <h4 className={styles.projectName}>
                                                {project.repository_url ? (
                                                    <a
                                                        href={
                                                            project.repository_url
                                                        }
                                                        target={
                                                            project.repository_url.startsWith(
                                                                'http'
                                                            )
                                                                ? '_blank'
                                                                : '_self'
                                                        }
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl_break_word
                                                        }
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        {project.name}
                                                    </a>
                                                ) : (
                                                    project.name
                                                )}
                                            </h4>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className={
                                                styles.projectDescriptionWrapper
                                            }
                                        >
                                            <DescriptionWithTooltip
                                                text={project.description}
                                            />
                                            {/* {project.description} */}
                                        </div>
                                    </div>

{/* <div>
    <div
        className={
            styles.packageDownloadWrapper
        }
    >
        <strong>
            Package Download URL:
        </strong>
        {project.package_download_url &&
            project.package_download_url
                .length > 0 && (
                <ul
                    style={{
                        margin: 0,
                        paddingLeft:
                            '1.5rem',
                        paddingTop:
                            '0.2rem',
                    }}
                >
                    {project.package_download_url.map(
                        (url, urlIdx) => (
                            <li
                                key={urlIdx}
                            >
                                <a
                                    className='wordWrap'
                                    href={
                                        url
                                    }
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onClick={(
                                        e
                                    ) => {
                                        e.stopPropagation();
                                        // handleMainLinkClick(
                                        //     e,
                                        //     spec,
                                        //     'homepage'
                                        // );
                                    }}
                                >
                                    {url}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            )}
    </div>
</div> */}

{/* 2025-12-12 Friday 17:41:53.  Handle empty values and n/a for the package_download_url value. */}

{/* <div>
    <div className={styles.packageDownloadWrapper}>
        <strong>Package Download URL:</strong>
        {(() => {
            // Filter out invalid URLs
            const validUrls = project.package_download_url?.filter(
                url => url && url !== 'n/a' && url !== '#' && url.trim() !== ''
            ) || [];

            if (validUrls.length > 0) {
                return (
                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: '1.5rem',
                            paddingTop: '0.2rem',
                        }}
                    >
                        {validUrls.map((url, urlIdx) => (
                            <li key={urlIdx}>
                                <a
                                    className='wordWrap'
                                    href={url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return <span> n/a</span>;
            }
        })()}
    </div>
</div> */}

{/* 2025-12-12 Friday 17:57:49.Or this alternative. */}

<div>
    <div className={styles.packageDownloadWrapper}>
        <strong>Package Download URL:</strong>
        {project.package_download_url?.filter(
            url => url && url !== 'n/a' && url !== '#' && url.trim() !== ''
        ).length > 0 ? (
            <ul
                style={{
                    margin: 0,
                    paddingLeft: '1.5rem',
                    paddingTop: '0.2rem',
                }}
            >
                {project.package_download_url
                    .filter(url => url && url !== 'n/a' && url !== '#' && url.trim() !== '')
                    .map((url, urlIdx) => (
                        <li key={urlIdx}>
                                <a
                                className='wordWrap'
                                href={url}
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={(e) => e.stopPropagation()}
                            >
                                {url}
                            </a>
                        </li>
                    ))}
            </ul>
        ) : (
            <span> n/a</span>
        )}
    </div>
</div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* Popup message - shared across all grids */}
            {!isModalOpen && message && (
                <div className={styles.modalAlertOverlay_main}>{message}</div>
            )}

            {/* Modal - shared across all grids */}
            {selectedProject && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalBody}>
                            <>
                                <div className={styles.fullWidthSection}>
                                    <h2>{selectedProject.name}</h2>
                                    <p>{selectedProject.description}</p>
                                </div>

                                <div className={styles.column}>
                                    <div className={styles.modalLinks01}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Repository URL:{' '}
                                        </span>
                                        {selectedProject.repository_url &&
                                        selectedProject.repository_url !==
                                            'n/a' &&
                                        selectedProject.repository_url !==
                                            '#' ? (
                                            <a
                                                href={
                                                    selectedProject.repository_url
                                                }
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {selectedProject.repository_url}
                                            </a>
                                        ) : (
                                            <span>n/a</span>
                                        )}
                                    </div>

                                    <div className={styles.modalLinks01}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Documentation URL:{' '}
                                        </span>
                                        {selectedProject.documentation_url &&
                                        selectedProject.documentation_url !==
                                            'n/a' &&
                                        selectedProject.documentation_url !==
                                            '#' ? (
                                            <a
                                                href={
                                                    selectedProject.documentation_url
                                                }
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {
                                                    selectedProject.documentation_url
                                                }
                                            </a>
                                        ) : (
                                            <span>n/a</span>
                                        )}
                                    </div>

                                    {/* <div className={styles.modalLinks01}>
                                        <strong>Package Download URL:</strong>
                                        {selectedProject.package_download_url &&
                                            selectedProject.package_download_url
                                                .length > 0 && (
                                                <ul
                                                    style={{
                                                        margin: 0,
                                                        paddingLeft: '1.5rem',
                                                        paddingTop: '0.2rem',
                                                    }}
                                                >
                                                    {selectedProject.package_download_url.map(
                                                        (url, idx) => (
                                                            <li key={idx}>
                                                                <a
                                                                    className='wordWrap'
                                                                    href={url}
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                >
                                                                    {url}
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                    </div> */}

                                    {/* 2025-12-12 Friday 18:24:18.Try this alternative -- catch empty and n/a and just display n/a as text. */}
                                    <div className={styles.modalLinks01}>
                                        <strong>Package Download URL:</strong>
        {selectedProject.package_download_url?.filter(
            url => url && url !== 'n/a' && url !== '#' && url.trim() !== ''
        ).length > 0 ? (
            <ul
                style={{
                    margin: 0,
                    paddingLeft: '1.5rem',
                    paddingTop: '0.2rem',
                }}
            >
                {selectedProject.package_download_url
                    .filter(url => url && url !== 'n/a' && url !== '#' && url.trim() !== '')
                    .map((url, urlIdx) => (
                        <li key={urlIdx}>
                            <a
                                className='wordWrap'
                                href={url}
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={(e) => e.stopPropagation()}
                            >
                                {url}
                            </a>
                        </li>
                    ))}
            </ul>
        ) : (
            <span> n/a</span>
        )}

                                    </div>

                                    <div className={styles.modalLinks01}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Service URL:{' '}
                                        </span>
                                        {selectedProject.service_url &&
                                        selectedProject.service_url !== 'n/a' &&
                                        selectedProject.service_url !== '#' ? (
                                            <a
                                                href={
                                                    selectedProject.service_url
                                                }
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {selectedProject.service_url}
                                            </a>
                                        ) : (
                                            <span>n/a</span>
                                        )}
                                    </div>

                                    <div className={styles.note_field}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Language:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.language}
                                        </div>
                                    </div>

                                    <div className={styles.note_field}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            License:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.license}
                                        </div>
                                    </div>

                                    <div className={styles.note_field}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Platform:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.platform}
                                        </div>
                                    </div>

                                    <div className={styles.note_field}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Comments:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.comments}
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>

                        <div className={styles.modalFooter}>
                            <button
                                className={styles.closeButton}
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>

                        {modalMessage && (
                            <div className={styles.modalAlertOverlay}>
                                {modalMessage}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
