class NotesController < ApplicationController
	respond_to :json

	def index
  	@note = Note.all
  	respond_with @note
  end

  def show 
  	@note = Note.find params[:id]
  	respond_with @note
  end 

  def update 
   	@note = Note.find params[:id]
 		@note.update_attributes(params[:note])
    respond_with @note
  end 

  def new 
    @note = Note.new
    @note.update_attributes(params[:note])
    respond_with @note
  end
  def create
    @note = Note.new
    @note.update_attributes(params[:note])
    respond_with @note
  end

  def destroy
    Note.destroy(params[:id])
    respond_with @note
  end
end
