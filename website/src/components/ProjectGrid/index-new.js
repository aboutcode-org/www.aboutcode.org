// 2025-11-22 Saturday 09:58:08.  From ToolGrid
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
// import projects from '@site/src/data/projects-v02.json';
import projects_library from '@site/src/data/projects-library.json';
import projects_main from '@site/src/data/projects-main.json';

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
                            <div>
                                <div className={styles.topRow}>
                                    <h4 className={styles.projectName}>
                                        {project.repository_url ? (
                                            <a
                                                href={project.repository_url}
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
                                    className={styles.projectDescriptionWrapper}
                                >
                                    {project.description}
                                </div>
                            </div>

                            <div>
                                <div className={styles.packageDownloadWrapper}>
                                    <strong>Package Download URL:</strong>
                                    {project.package_download_url &&
                                        project.package_download_url.length >
                                            0 && (
                                            <ul
                                                style={{
                                                    margin: 0,
                                                    paddingLeft: '1.5rem',
                                                    paddingTop: '0.2rem',
                                                }}
                                            >
                                                {project.package_download_url.map(
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
                                </div>
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

                                    <div className={styles.modalLinks01}>
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
