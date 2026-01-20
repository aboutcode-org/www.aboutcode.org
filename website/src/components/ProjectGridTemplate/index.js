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
                        el.scrollWidth > el.clientWidth,
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

    function normalizeToArray(value) {
        const INVALID_VALUES = new Set(['Not available', 'Not applicable']);

        if (Array.isArray(value)) {
            return value.filter(
                (v) => typeof v === 'string' && !INVALID_VALUES.has(v),
            );
        }

        if (typeof value === 'string' && !INVALID_VALUES.has(value)) {
            return [value];
        }

        return [];
    }

    const leadMaintainers = normalizeToArray(selectedProject?.lead_maintainer);

    const packageDownloadUrls = normalizeToArray(
        selectedProject?.package_download_url,
    );

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
                                                {project.name}
                                            </h4>
                                            <div className={styles.logoWrapper}>
                                                <img
                                                    src='./img/link.svg'
                                                    alt='logo'
                                                    className={styles.logoImg}
                                                />
                                            </div>
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
                                                    ),
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.modalLinks01}>
                                        {project.documentation_url &&
                                            project.documentation_url !==
                                                'Not applicable' &&
                                            project.documentation_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Documentation URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            project.documentation_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        {
                                                            project.documentation_url
                                                        }
                                                    </a>
                                                </div>
                                            )}
                                    </div>

                                    <div className={styles.modalLinks01}>
                                        {project.repository_url &&
                                            project.repository_url !==
                                                'Not applicable' &&
                                            project.repository_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Repository URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            project.repository_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        {project.repository_url}
                                                    </a>
                                                </div>
                                            )}
                                    </div>

                                    <div className={styles.modalLinks01}>
                                        {project.service_url &&
                                            project.service_url !==
                                                'Not applicable' &&
                                            project.service_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Service URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            project.service_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
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
                                            ),
                                        )}
                                    </p>
                                </div>

                                <div className={styles.column}>
                                    <div>
                                        {selectedProject.repository_url &&
                                            selectedProject.repository_url !==
                                                'Not applicable' &&
                                            selectedProject.repository_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Repository URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            selectedProject.repository_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                    >
                                                        {
                                                            selectedProject.repository_url
                                                        }
                                                    </a>
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {packageDownloadUrls.length > 0 && (
                                            <div
                                                className={styles.modalLinks01}
                                            >
                                                <span
                                                    style={{
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    Package Download URL
                                                    {packageDownloadUrls.length >
                                                    1
                                                        ? 's'
                                                        : ''}
                                                    :{' '}
                                                </span>
                                                <ul
                                                    className={
                                                        styles.packageDownloadUrlList
                                                    }
                                                >
                                                    {packageDownloadUrls.map(
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
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        {selectedProject.documentation_url &&
                                            selectedProject.documentation_url !==
                                                'Not applicable' &&
                                            selectedProject.documentation_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Documentation URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            selectedProject.documentation_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                    >
                                                        {
                                                            selectedProject.documentation_url
                                                        }
                                                    </a>
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {selectedProject.service_url &&
                                            selectedProject.service_url !==
                                                'Not applicable' &&
                                            selectedProject.service_url !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Service URL:{' '}
                                                    </span>
                                                    <a
                                                        href={
                                                            selectedProject.service_url
                                                        }
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className={
                                                            styles.modalLinkUrl
                                                        }
                                                    >
                                                        {
                                                            selectedProject.service_url
                                                        }
                                                    </a>
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {selectedProject.languages &&
                                            selectedProject.languages !==
                                                'Not applicable' &&
                                            selectedProject.languages !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Language(s):{' '}
                                                    </span>
                                                    {selectedProject.languages}
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {selectedProject.platform &&
                                            selectedProject.platform !==
                                                'Not applicable' &&
                                            selectedProject.platform !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Platform:{' '}
                                                    </span>
                                                    {selectedProject.platform}
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {selectedProject.software_license &&
                                            selectedProject.software_license !==
                                                'Not applicable' &&
                                            selectedProject.software_license !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Software License:{' '}
                                                    </span>
                                                    {
                                                        selectedProject.software_license
                                                    }
                                                </div>
                                            )}
                                    </div>

                                    <div>
                                        {selectedProject.data_license &&
                                            selectedProject.data_license !==
                                                'Not applicable' &&
                                            selectedProject.data_license !==
                                                'Not available' && (
                                                <div
                                                    className={
                                                        styles.modalLinks01
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Data License:{' '}
                                                    </span>
                                                    {
                                                        selectedProject.data_license
                                                    }
                                                </div>
                                            )}
                                    </div>

                                    {leadMaintainers.length > 0 && (
                                        <div className={styles.modalLinks01}>
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Lead Maintainer
                                                {leadMaintainers.length > 1
                                                    ? 's'
                                                    : ''}
                                                :{' '}
                                            </span>
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
                                                    ),
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
