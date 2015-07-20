class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :like]

  def index
    # respond_with Post.all
    count = Post.all.length
    post = Post.paginate page: params[:page], per_page: Settings.page_size
    render json: { Count: count,
                   Posts: post }
  end

  def create
    respond_with Post.create post_params.merge(user_id: current_user.id)
  end

  def show
    respond_with Post.find params[:id]
  end

  def like
    post = Post.find params[:id]
    vote = post.votes.new user_id: current_user.id
    if vote.save
      post.increment! :like
      respond_with post
    else
      render json: {error: vote.errors.full_messages}
    end
  end
  private
  def post_params
    params.require(:post).permit(:link, :title)
  end
end
