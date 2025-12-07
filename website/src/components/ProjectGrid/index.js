// 2025-11-22 Saturday 09:58:08.  From ToolGrid
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
// import specs from '@site/src/data/specifications.json';
import projects from '@site/src/data/projects-v01.json';

export default function ProjectGrid() {
    const [message, setMessage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    // Monitor open modal -- state prevents display of main-page alert
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (project) => {
        setSelectedProject(project); // sets modal content
    };
    // Use a separate state for the modal alert
    const [modalMessage, setModalMessage] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setSelectedProject(null);
                setActiveTab('overview');
            }
        }
        if (selectedProject) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    // modal link events
    const handleLinkClick = (e, project, linkType) => {
        e.preventDefault();
        e.stopPropagation();

        let message = null;

        if (
            linkType === 'homepage' &&
            (!project.homepage || project.homepage === 'n/a')
        ) {
            message = `The homepage for "${project.name}" is not available.`;
        } else if (
            linkType === 'source_download' &&
            (!project.source_download || project.source_download === 'n/a')
        ) {
            message = `The source download URL for "${project.name}" is not available.`;
        } else if (
            linkType === 'package_download' &&
            (!project.package_download || project.package_download === 'n/a')
        ) {
            message = `The package download URL for "${project.name}" is not available.`;
        }

        if (message) {
            setModalMessage(message);
            setTimeout(() => setModalMessage(null), 3000);
        } else {
            // manually open the valid link if it passed checks
            const url =
                linkType === 'homepage' ? project.homepage : project.source_download;
            window.open(url, '_blank', 'noopener noreferrer');
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        setActiveTab('overview');
    };

    return (
        <div className={styles.projectGridWrapper}>
            <div className={styles.projectGridContainer}>
                <div className={styles.projectGrid}>
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={styles.projectCard}
                            onClick={() => openModal(project)}
                        >
                            <div className={styles.projectCardTopBlock}>
                                <div className={styles.topRow}>
                                    <h4 className={styles.projectName}>
                                        {project.homepage ? (
                                            <a
                                                href={project.homepage}
                                                target={
                                                    project.homepage.startsWith(
                                                        'http'
                                                    )
                                                        ? '_blank'
                                                        : '_self'
                                                }
                                                rel='noopener noreferrer'
                                                // className={styles.modalLinkUrl}
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

                                    {/* Optional logo (only if available) */}
                                    {project.logo && (
                                        <div className={styles.logoWrapper}>
                                            <img
                                                src={project.logo}
                                                alt={`${project.name} logo`}
                                                className={styles.logoImg}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.projectCardMidBlock}>
                                <div className={styles.projectDescriptionWrapper}>
                                    {project.description}
                                </div>
                            </div>

                            <div className={styles.projectCardMidBlock}>
                                <ul className={styles.projectMeta}>
                                    <li>
                                        <strong>Base language:</strong>{' '}
                                        {project.language}
                                    </li>
                                    <li>
                                        <strong>License:</strong> {project.license}
                                    </li>
                                    <li>
                                        <strong>Standards:</strong>{' '}
                                        {project.standards}
                                    </li>
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
                {/* ^ end of projectGrid */}
            </div>
            {/* ^ end of projectGridContainer */}

            {/* Popup message */}
            {/* Don't display this message if the modal is open. */}
            {!isModalOpen && message && (
                <div className={styles.modalAlertOverlay_main}>{message}</div>
            )}

            {/* Modal */}
            {selectedProject && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalBody}>
                            <>
                                {/* Full width section */}
                                <div className={styles.fullWidthSection}>
                                    <h2>{selectedProject.name}</h2>
                                    <p>{selectedProject.description}</p>
                                </div>

                                {/* Two column section */}
                                <div className={styles.twoColumnSection}>
                                    <div className={styles.column}>
                                        <ul className={styles.featureList}>
                                            <li>
                                                <strong>Base language:</strong>{' '}
                                                {selectedProject.language}
                                            </li>
                                            <li>
                                                <strong>License:</strong>{' '}
                                                {selectedProject.license}
                                            </li>
                                            <li>
                                                <strong>Functions:</strong>{' '}
                                                {selectedProject.functions}
                                            </li>
                                            <li>
                                                <strong>Type:</strong>{' '}
                                                {selectedProject.type}
                                            </li>
                                            <li>
                                                <strong>Standards:</strong>{' '}
                                                {selectedProject.standards}
                                            </li>
                                            <li>
                                                <strong>Platform:</strong>{' '}
                                                {selectedProject.platform}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles.column}>
                                        <div className={styles.modalLinks01}>
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Home:{' '}
                                            </span>

                                            {selectedProject.homepage &&
                                            selectedProject.homepage !==
                                                'n/a' &&
                                            selectedProject.homepage !== '#' ? (
                                                <a
                                                    href={
                                                        selectedProject.homepage
                                                    }
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className={
                                                        styles.modalLinkUrl
                                                    }
                                                >
                                                    {selectedProject.homepage}
                                                </a>
                                            ) : (
                                                <span>n/a</span>
                                            )}
                                        </div>
                                        <div className={styles.modalLinks01}>
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Source download:{' '}
                                            </span>

                                            {selectedProject.source_download &&
                                            selectedProject.source_download !==
                                                'n/a' &&
                                            selectedProject.source_download !==
                                                '#' ? (
                                                <a
                                                    href={
                                                        selectedProject.source_download
                                                    }
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className={
                                                        styles.modalLinkUrl
                                                    }
                                                >
                                                    {
                                                        selectedProject.source_download
                                                    }
                                                </a>
                                            ) : (
                                                <span>n/a</span>
                                            )}
                                        </div>

                                        <div className={styles.modalLinks01}>
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Package download:{' '}
                                            </span>

                                            {selectedProject.package_download &&
                                            selectedProject.package_download !==
                                                'n/a' &&
                                            selectedProject.package_download !==
                                                '#' ? (
                                                <a
                                                    href={
                                                        selectedProject.package_download
                                                    }
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className={
                                                        styles.modalLinkUrl
                                                    }
                                                >
                                                    {
                                                        selectedProject.package_download
                                                    }
                                                </a>
                                            ) : (
                                                <span>n/a</span>
                                            )}
                                        </div>

                                        <div className={styles.note_field}>
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Notes:{' '}
                                            </span>
                                            <div className={styles.modalText}>
                                                {selectedProject.notes}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>

                        {/* Close button */}
                        <div className={styles.modalFooter}>
                            <button
                                className={styles.closeButton}
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                        {/* Display alert inside open modal. */}
                        {modalMessage && (
                            <div className={styles.modalAlertOverlay}>
                                {modalMessage}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {/* end of modal */}
        </div>
    );
}
