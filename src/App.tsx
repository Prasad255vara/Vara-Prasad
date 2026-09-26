/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Philosophy } from './components/Philosophy';
import { Disciplines } from './components/Disciplines';
import { TeamSection } from './components/TeamSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Error404View } from './components/Error404View';

export default function App() {
  const [blueprintMode, setBlueprintMode] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | '404'>('home');
  const [prefilledProject, setPrefilledProject] = useState<string | undefined>(undefined);

  const toggleBlueprint = () => {
    setBlueprintMode((prev) => !prev);
  };

  const handleOpenProject = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setPrefilledProject(projectTitle);
    handleOpenContactModal();
  };

  const handleInquireDiscipline = (disciplineTitle: string) => {
    setPrefilledProject(disciplineTitle);
    handleOpenContactModal();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSection = (href: string) => {
    if (currentView === '404') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === '404') {
    return <Error404View onReturnHome={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e5e7eb] flex flex-col justify-between selection:bg-[#38bdf8]/30 selection:text-white">
      {/* Primary Fixed Navigation Bar */}
      <Header
        blueprintMode={blueprintMode}
        onToggleBlueprint={toggleBlueprint}
        onOpenContactModal={handleOpenContactModal}
        onSelectView={setCurrentView}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          blueprintMode={blueprintMode}
          onToggleBlueprint={toggleBlueprint}
          onExploreProjects={handleExploreProjects}
          onOpenProject={handleOpenProject}
        />

        {/* Selected Works & 3 Interactive Viewing Modes (Grid, List, Active Gallery) */}
        <ProjectShowcase
          blueprintMode={blueprintMode}
          onOpenProject={handleOpenProject}
        />

        {/* Philosophy & 4 Architectural Pillars */}
        <Philosophy />

        {/* Holistic Practice Disciplines */}
        <Disciplines onInquireDiscipline={handleInquireDiscipline} />

        {/* Studio Leadership & Dynamic Circular Composition */}
        <TeamSection />

        {/* International Awards & Accolades */}
        <AwardsSection />

        {/* Bureau Locations & Commission Inquiry Form */}
        <ContactSection prefilledProject={prefilledProject} />
      </main>

      {/* Global Minimalist Architectural Footer */}
      <Footer
        onScrollToTop={handleScrollToTop}
        onOpenSection={handleOpenSection}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Project Case Study Fullscreen Dossier Modal */}
      {selectedProjectId && (
        <ProjectModal
          projectId={selectedProjectId}
          onClose={handleCloseProject}
          onSelectProject={handleOpenProject}
          onInquireProject={handleInquireProject}
        />
      )}
    </div>
  );
}
