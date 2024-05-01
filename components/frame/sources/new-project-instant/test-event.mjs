export default {
  data: {
    _type: "project",
    archive_status: "standard",
    archived_at: null,
    archived_file_count: 0,
    archived_storage: 0,
    collaborator_count: 0,
    deleted_at: null,
    description: null,
    file_count: 0,
    folder_count: 0,
    has_drm_assets: false,
    id: "string",
    ignore_archive: false,
    inserted_at: "datetime",
    invite_url: null,
    name: "string",
    owner_id: "string",
    project_preferences: {
      _type: "project_preference",
      collaborator_can_download: true,
      collaborator_can_invite: true,
      collaborator_can_share: false,
      deleted_at: null,
      devices_enabled: false,
      id: "string",
      inserted_at: "datetime",
      notify_on_new_asset: true,
      notify_on_new_collaborator: true,
      notify_on_new_comment: true,
      notify_on_new_mention: true,
      notify_on_updated_label: true,
      notify_slack: false,
      project_id: null,
      review_link_preferences: null,
      updated_at: "datetime",
      user_id: null,
    },
    read_only: false,
    resource_id: null,
    root_asset: {
      filesize: 0,
      private: false,
      is_forensically_watermarked: false,
      _type: "folder",
      shared: false,
      drm: null,
      account_id: "string",
      cover_asset_id: null,
      workfront_task_connected: null,
      workfront_asset_locked_at: null,
      frames: 0,
      comment_count: 0,
      creator_id: "string",
      id: "string",
      copy: false,
      archive_status: null,
      name: "root",
      team_id: "string",
      is_360: false,
      workfront_approval_status: null,
      versions: 0,
      resource_id: null,
      uploaded_at: null,
      inserted_at: "datetime",
      project_id: "string",
      is_session_watermarked: false,
      deleted_at: null,
      properties: null,
      checksums: null,
      rating: null,
      index: 0,
      workfront_task_title: null,
      workfront_task_id: null,
      public_item_count: 0,
      label: "none",
      workfront_connected: null,
      is_hls_required: false,
      audio_tracks: null,
      user_permissions: {
        can_download: true,
        can_manage_devices: true,
        can_modify_template: false,
        can_public_share_presentation: true,
        can_public_share_review_link: true,
        can_see_watermarking_settings: true,
        can_share_downloadable_presentation: true,
        can_share_downloadable_review_link: true,
        can_share_unwatermarked_presentation: true,
        can_share_unwatermarked_review_link: true,
        can_share_without_drm_presentation: false,
        can_share_without_drm_review_link: false,
        can_share_without_forensic_watermark_presentation: true,
        can_share_without_forensic_watermark_review_link: true,
        can_view_devices: true,
      },
      realtime_upload: null,
      archived_at: null,
      parent_id: null,
      allow_original_playback: true,
      autoversion_id: null,
      item_count: 0,
      type: "folder",
      subtitle_tracks: null,
      updated_at: "datetime",
      filetype: null,
      fps: null,
      duration: null,
      description: null,
      metadata_flags: null,
      hard_deleted_at: null,
      archive_scheduled_at: null,
    },
    root_asset_id: "string",
    shared: false,
    storage: 0,
    team_id: "string",
    updated_at: "datetime",
    user_permissions: {
      can_download: true,
      can_manage_devices: true,
      can_modify_template: false,
      can_public_share_presentation: true,
      can_public_share_review_link: true,
      can_see_watermarking_settings: true,
      can_share_downloadable_presentation: true,
      can_share_downloadable_review_link: true,
      can_share_unwatermarked_presentation: true,
      can_share_unwatermarked_review_link: true,
      can_share_without_drm_presentation: false,
      can_share_without_drm_review_link: false,
      can_share_without_forensic_watermark_presentation: true,
      can_share_without_forensic_watermark_review_link: true,
      can_view_devices: true,
    },
    user_preferences: {
      _type: "project_preference",
      collaborator_can_download: true,
      collaborator_can_invite: true,
      collaborator_can_share: false,
      deleted_at: null,
      devices_enabled: false,
      id: "string",
      inserted_at: "datetime",
      notify_on_new_asset: true,
      notify_on_new_collaborator: true,
      notify_on_new_comment: true,
      notify_on_new_mention: true,
      notify_on_updated_label: true,
      notify_slack: false,
      project_id: "string",
      review_link_preferences: null,
      updated_at: "datetime",
      user_id: "string",
    },
  },
  resource: {
    id: "string",
    type: "project",
  },
  team: {
    id: "string",
  },
  type: "project.created",
  user: {
    id: "string",
  },
};