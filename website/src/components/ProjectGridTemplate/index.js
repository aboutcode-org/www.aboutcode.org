import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import projects_application from '@site/src/data/projects-application.json';
import projects_scancode from '@site/src/data/projects-scancode.json';
import projects_package_url from '@site/src/data/projects-package-url.json';
import projects_inspectors from '@site/src/data/projects-inspectors.json';
import projects_libraries from '@site/src/data/projects-libraries.json';
import project_field_help from '@site/src/data/project_field_help.json';

export default function ProjectGrids() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // list of data sources
    const projectSources = [
        {
            id: 'application-projects',
            title: 'Apps for the software supply chains',
            data: projects_application,
        },
        {
            id: 'scancode-projects',
            title: 'Scan code with ScanCode',
            data: projects_scancode,
        },
        {
            id: 'purl-projects',
            title: 'Data keyed by Package-URL (PURL)',
            data: projects_package_url,
        },
        {
            id: 'inspectors',
            title: 'Inspectors for special purpose',
            data: projects_inspectors,
        },
        {
            id: 'libraries',
            title: 'Libraries and building blocks',
            data: projects_libraries,
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
                <div ref={descRef} className={`${styles.projectDescription}`}>
                    {text}
                </div>
                {showTooltip && <div className={styles.tooltip}>{text}</div>}
            </div>
        );
    }

    // Works with FieldLabelHelpCard.
    function HoverTooltipCard({ children, tooltip }) {
        const [showTooltip, setShowTooltip] = React.useState(false);

        return (
            <span
                className={styles.projectDescriptionWrapper}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
                {showTooltip && (
                    <div className={styles.field_tooltip}>{tooltip}</div>
                )}
            </span>
        );
    }

    // This version uses the field name itself -- no icon -- to trigger the tootip.
    function FieldLabelHelpCard({ label, help }) {
        if (!help) {
            return <strong>{label}:</strong>;
        }

        return (
            <span className={styles.fieldLabelWrapper}>
                <HoverTooltipCard tooltip={help}>
                    <strong className={styles.fieldLabelWithHelp}>
                        {label}
                    </strong>
                </HoverTooltipCard>

                <span className={styles.fieldColon}>:&nbsp;</span>
            </span>
        );
    }

    // Refactored null-value check.
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

    const isUsableValue = (value) => normalizeToArray(value).length > 0;

    return (
        <div className={styles.projectGridWrapper01}>
            {/* Iterate through each data source */}
            {projectSources.map((source, sourceIdx) => (
                <div key={sourceIdx} className={styles.gridSection}>
                    {/* Add a heading for each grid */}
                    <div className={styles.sectionTitle}>
                        <h2 id={source.id}>{source.title}</h2>
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

                                    {isUsableValue(project.description) && (
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
                                    )}

                                    {isUsableValue(
                                        project.documentation_url,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Doc'
                                                help={
                                                    project_field_help.documentation_url
                                                }
                                            />
                                            <a
                                                href={project.documentation_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                {project.documentation_url}
                                            </a>
                                        </div>
                                    )}

                                    {isUsableValue(project.repository_url) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Code'
                                                help={
                                                    project_field_help.repository_url
                                                }
                                            />
                                            <a
                                                href={project.repository_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                {project.repository_url}
                                            </a>
                                        </div>
                                    )}

                                    {isUsableValue(project.service_url) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Demo'
                                                help={
                                                    project_field_help.service_url
                                                }
                                            />
                                            <a
                                                href={project.service_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.modalLinkUrl}
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                {project.service_url}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

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

                                    {isUsableValue(
                                        selectedProject.description,
                                    ) && (
                                        <p>
                                            {selectedProject.description.map(
                                                (para, idx) => (
                                                    <p key={idx}>{para}</p>
                                                ),
                                            )}
                                        </p>
                                    )}
                                </div>

                                <div className={styles.column}>
                                    {isUsableValue(
                                        selectedProject.repository_url,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Code'
                                                help={
                                                    project_field_help.repository_url
                                                }
                                            />
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
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.package_download_url,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Download'
                                                help={
                                                    project_field_help.package_download_url
                                                }
                                            />
                                            <ul
                                                className={
                                                    styles.packageDownloadUrlList
                                                }
                                            >
                                                {selectedProject.package_download_url.map(
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

                                    {isUsableValue(
                                        selectedProject.documentation_url,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Doc'
                                                help={
                                                    project_field_help.documentation_url
                                                }
                                            />
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
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.service_url,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Demo'
                                                help={
                                                    project_field_help.service_url
                                                }
                                            />
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
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.languages,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Language(s)'
                                                help={
                                                    project_field_help.languages
                                                }
                                            />
                                            {selectedProject.languages}
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.platform,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Platform'
                                                help={
                                                    project_field_help.platform
                                                }
                                            />
                                            {selectedProject.platform}
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.software_license,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Software License'
                                                help={
                                                    project_field_help.software_license
                                                }
                                            />
                                            {selectedProject.software_license}
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.data_license,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Data License'
                                                help={
                                                    project_field_help.data_license
                                                }
                                            />
                                            {selectedProject.data_license}
                                        </div>
                                    )}

                                    {isUsableValue(
                                        selectedProject.lead_maintainer,
                                    ) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Lead Maintainer(s)'
                                                help={
                                                    project_field_help.lead_maintainer
                                                }
                                            />
                                            <ul
                                                className={
                                                    styles.maintainerList
                                                }
                                            >
                                                {selectedProject.lead_maintainer.map(
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

                                    {isUsableValue(selectedProject.notes) && (
                                        <div className={styles.modalLinks01}>
                                            <FieldLabelHelpCard
                                                label='Notes'
                                                help={project_field_help.notes}
                                            />
                                            {selectedProject.notes}
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
                    </div>
                </div>
            )}
        </div>
    );
}
