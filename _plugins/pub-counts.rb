require 'bibtex'

module Jekyll
  class PubCountsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      scholar_cfg = site.config['scholar'] || {}
      source = (scholar_cfg['source'] || '/_bibliography/').gsub(/^\//, '')
      bib_file = scholar_cfg['bibliography'] || 'papers.bib'
      bib_path = File.join(site.source, source, bib_file)

      return unless File.exist?(bib_path)

      bib = BibTeX.open(bib_path, filter: :latex)
      counts = {}

      bib.each do |entry|
        next unless entry.respond_to?(:[])
        pub_type = entry[:pub_type]&.to_s&.strip
        next if pub_type.nil? || pub_type.empty?
        counts[pub_type] = (counts[pub_type] || 0) + 1
      end

      site.data['pub_counts'] = counts
    end
  end
end
