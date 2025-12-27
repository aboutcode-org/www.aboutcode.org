import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import projects_application from '@site/src/data/projects-application.json';
import projects_scancode from '@site/src/data/projects-scancode.json';
import projects_package_url from '@site/src/data/projects-package-url.json';
import projects_inspectors from '@site/src/data/projects-inspectors.json';
import projects_libraries from '@site/src/data/projects-libraries.json';

export default function ProjectGrids() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    // list of data sources
    const projectSources = [
        {
            title: 'Application Projects',
            data: projects_application,
            description:
                'These projects offer an application that you can install in the cloud or a local environment.',
        },
        {
            title: 'ScanCode projects',
            data: projects_scancode,
            description:
                'These projects are components or extensions of ScanCode.',
        },
        {
            title: 'Package-URL (PURL) projects',
            data: projects_package_url,
            description:
                'These projects provide tools and data to support the use of the PURL (Package-URL) or VERS (Version Range Specifier) specifications.',
        },
        {
            title: 'Inspectors',
            data: projects_inspectors,
            description:
                'AboutCode Inspectors are special-purpose analysis tools. You can run them as a ScanCode Toolkit plugin, as steps in a ScanCode.io pipeline, or from the command line.',
        },
        {
            title: 'Libraries',
            data: projects_libraries,
            description:
                'AboutCode libraries are key building blocks for the AboutCode software and data stack - they have also been incorporated into other major FOSS projects and are available for use by anyone.',
        },
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
            }
        }
        if (selectedProject) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    // Add tooltip to card and modal.
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
            <div className={styles.projectDescriptionWrapper}>
                <div
                    ref={descRef}
                    className={`${styles.projectDescription} ${styles.multiline}`}
                >
                    {text}
                </div>
                {showTooltip && <div className={styles.tooltip}>{text}</div>}
            </div>
        );
    }

    // 2025-12-24 Wednesday 15:04:08.create a reusable helper for the lists
    function normalizeToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === 'string' && value !== 'n/a' && value !== '#') {
            return [value];
        }
        return [];
    }

    const leadMaintainers = normalizeToArray(selectedProject?.lead_maintainer);

    return (
        <div className={styles.projectGridWrapper01}>
            {/* Iterate through each data source */}
            {projectSources.map((source, sourceIdx) => (
                <div key={sourceIdx} className={styles.gridSection}>
                    {/* Add a heading for each grid */}
                    <div className={styles.sectionTitle}>
                        <h2>{source.title}</h2>
                    </div>

                    <div className={styles.sectionIntro}>
                        {source.description}
                    </div>

                    <div className={styles.projectGridContainer01}>
                        <div className={styles.projectGrid}>
                            {/* Iterate through each JSON object (project) in the .json file and create the main card */}
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
                                                text={project.description.map(
                                                    (para, idx) => (
                                                        <p key={idx}>{para}</p>
                                                    )
                                                )}
                                            />
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
                                    <p>
                                        {selectedProject.description.map(
                                            (para, idx) => (
                                                <p key={idx}>{para}</p>
                                            )
                                        )}
                                    </p>
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

                                    {/* Catch empty and n/a and just display n/a as text. */}
                                    <div className={styles.modalLinks01}>
                                        <strong>Package Download URL:</strong>
                                        {selectedProject.package_download_url?.filter(
                                            (url) =>
                                                url &&
                                                url !== 'n/a' &&
                                                url !== '#' &&
                                                url.trim() !== ''
                                        ).length > 0 ? (
                                            <ul
                                                style={{
                                                    margin: 0,
                                                    paddingTop: '0.2rem',
                                                }}
                                            >
                                                {selectedProject.package_download_url
                                                    .map((url, urlIdx) => (
                                                        <li key={urlIdx}>
                                                            <a
                                                                className='wordWrap'
                                                                href={url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                                onClick={(e) =>
                                                                    e.stopPropagation()
                                                                }
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
                                            Language(s):{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.languages}
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
                                            Software License:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.software_license}
                                        </div>
                                    </div>

                                    <div className={styles.note_field}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Data License:{' '}
                                        </span>
                                        <div className={styles.modalText}>
                                            {selectedProject.data_license}
                                        </div>
                                    </div>

                                    <div className={styles.modalLinks01}>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Lead Maintainer(s):
                                        </span>

                                        {leadMaintainers.length > 0 ? (
                                            <ul
                                                className={
                                                    styles.maintainerList
                                                }
                                            >
                                                {leadMaintainers.map(
                                                    (url, idx) => (
                                                        <li key={idx}>
                                                            <a
                                                                href={url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                                className={
                                                                    styles.modalLinkUrl
                                                                }
                                                            >
                                                                {url}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <span>n/a</span>
                                        )}
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
