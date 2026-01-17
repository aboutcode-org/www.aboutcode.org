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

    function getFirstSentence(descriptionArr) {
        if (!descriptionArr || descriptionArr.length === 0) return '';
        const firstPara = descriptionArr[0];
        // Split by period, exclamation, or question mark followed by space or end of string
        const sentences = firstPara.split(/([.!?])(?:\s|$)/);
        if (sentences.length >= 2) {
            return sentences[0] + sentences[1];
        }
        return firstPara;
    }

    function isValidLink(url) {
        return url && url !== 'n/a' && url !== '#' && url.trim() !== '';
    }

    function isValidValue(value) {
        if (!value) return false;
        if (Array.isArray(value)) return value.length > 0;
        const lower = String(value).toLowerCase();
        return lower !== 'n/a' && lower !== '#' && lower.trim() !== '';
    }

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
                                    <div className={styles.topRow}>
                                        <h4 className={styles.projectName}>
                                            {project.name}
                                        </h4>
                                        {isValidLink(project.repository_url) && (
                                            <a
                                                href={project.repository_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.externalLinkIcon}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    <div className={styles.projectDescriptionWrapper}>
                                        <p className={styles.projectDescription}>
                                            {getFirstSentence(project.description)}
                                        </p>
                                    </div>

                                    <div className={styles.cardLinks}>
                                        {isValidLink(project.documentation_url) && (
                                            <div className={styles.cardLinkRow}>
                                                <span className={styles.cardLinkLabel}>Documentation:</span>
                                                <a
                                                    href={project.documentation_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.cardLinkValue}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {project.documentation_url}
                                                </a>
                                            </div>
                                        )}
                                        {isValidLink(project.repository_url) && (
                                            <div className={styles.cardLinkRow}>
                                                <span className={styles.cardLinkLabel}>Repository:</span>
                                                <a
                                                    href={project.repository_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.cardLinkValue}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {project.repository_url}
                                                </a>
                                            </div>
                                        )}
                                        {isValidLink(project.service_url) && (
                                            <div className={styles.cardLinkRow}>
                                                <span className={styles.cardLinkLabel}>Service URL:</span>
                                                <a
                                                    href={project.service_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.cardLinkValue}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {project.service_url}
                                                </a>
                                            </div>
                                        )}
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
                                    {isValidLink(selectedProject.repository_url) && (
                                        <div className={styles.modalLinks01}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Repository URL:{' '}
                                            </span>
                                            <a
                                                href={selectedProject.repository_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {selectedProject.repository_url}
                                            </a>
                                        </div>
                                    )}

                                    {selectedProject.package_download_url?.filter(isValidLink).length > 0 && (
                                        <div className={styles.modalLinks01}>
                                            <strong>Package Download URL:</strong>
                                            <ul style={{ margin: 0, paddingTop: '0.2rem' }}>
                                                {selectedProject.package_download_url
                                                    .filter(isValidLink)
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
                                        </div>
                                    )}

                                    {isValidLink(selectedProject.documentation_url) && (
                                        <div className={styles.modalLinks01}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Documentation URL:{' '}
                                            </span>
                                            <a
                                                href={selectedProject.documentation_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {selectedProject.documentation_url}
                                            </a>
                                        </div>
                                    )}

                                    {isValidLink(selectedProject.service_url) && (
                                        <div className={styles.modalLinks01}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Service URL:{' '}
                                            </span>
                                            <a
                                                href={selectedProject.service_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                            >
                                                {selectedProject.service_url}
                                            </a>
                                        </div>
                                    )}

                                    {isValidValue(selectedProject.languages) && (
                                        <div className={styles.note_field}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Language(s):{' '}
                                            </span>
                                            <div className={styles.modalText}>
                                                {selectedProject.languages}
                                            </div>
                                        </div>
                                    )}

                                    {isValidValue(selectedProject.platform) && (
                                        <div className={styles.note_field}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Platform:{' '}
                                            </span>
                                            <div className={styles.modalText}>
                                                {selectedProject.platform}
                                            </div>
                                        </div>
                                    )}

                                    {isValidValue(selectedProject.software_license) && (
                                        <div className={styles.note_field}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Software License:{' '}
                                            </span>
                                            <div className={styles.modalText}>
                                                {selectedProject.software_license}
                                            </div>
                                        </div>
                                    )}

                                    {isValidValue(selectedProject.data_license) && (
                                        <div className={styles.note_field}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Data License:{' '}
                                            </span>
                                            <div className={styles.modalText}>
                                                {selectedProject.data_license}
                                            </div>
                                        </div>
                                    )}

                                    {leadMaintainers.filter(isValidLink).length > 0 && (
                                        <div className={styles.modalLinks01}>
                                            <span style={{ fontWeight: 'bold' }}>
                                                Lead Maintainer(s):
                                            </span>
                                            <ul className={styles.maintainerList}>
                                                {leadMaintainers.filter(isValidLink).map((url, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className={styles.modalLinkUrl}
                                                        >
                                                            {url}
                                                        </a>
                                                    </li>
                                                )
                                                )}
                                            </ul>
                                        </div>
                                    )}
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
